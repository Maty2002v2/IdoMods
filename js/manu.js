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
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${entry.target.id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => observer.observe(section));

    toggleMobileMenu();
});
