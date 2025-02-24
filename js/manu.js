const toggleMobileMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const backdrop = document.querySelector(".menu-backdrop");
    
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        backdrop.classList.toggle("show");
    });

    // close menu after outside click
    document.addEventListener("click", (event) => {
        const isClickInsideMenu = navLinks.contains(event.target) || hamburger.contains(event.target);

        if (!isClickInsideMenu) {
            navLinks.classList.remove("show");
            backdrop.classList.remove("show");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.dataset.parentId;
                navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
            }
        });
    }, {threshold: 0.9});

    sections.forEach(section => {
        const topMarker = document.createElement("div");
        topMarker.style.position = "absolute";
        topMarker.style.top = "100px";
        topMarker.style.width = "50%";
        topMarker.style.height = "200px";

        topMarker.dataset.parentId = section.id;

        section.style.position = "relative";;

        section.prepend(topMarker);
        observer.observe(topMarker);
      });

    toggleMobileMenu();
});
