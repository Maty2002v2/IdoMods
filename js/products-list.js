document.addEventListener("DOMContentLoaded", async () => {
    let page = 1;
    const productContainer = document.getElementById("products-list");

    const loadMoreProducts = async () => {
        const pageSize = 20;

        const products = await window.fetchProducts(page, pageSize);
        if (products.data.length > 0) {
            renderProducts(products.data);
            page++;
        }
    }

    const renderProducts = (products) => {
        products.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("product");
            div.innerHTML = `<p>ID: ${product.id}</p>`;
            productContainer.appendChild(div);
        });
    }

    window.addEventListener("scroll", async () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !window.productsLoading) {
            await loadMoreProducts();
        }
    });

    await loadMoreProducts();
});
