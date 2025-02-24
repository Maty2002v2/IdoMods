document.addEventListener("DOMContentLoaded", async () => {
    let page = 1;
    const productContainer = document.getElementById("products-list");

    const loadMoreProducts = async () => {
        const products = await window.fetchProducts(page, 10);
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
            div.addEventListener("click", () => window.showPopup(product.text, product.id));
            productContainer.appendChild(div);
        });
    }

    window.addEventListener("scroll", async () => {
        const productsLimitOnPage = +document.querySelector('select#product-count').value ?? 20;
        const productsBlocks = document.querySelectorAll('.product');

        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight 
            && !window.productsLoading
            && productsBlocks.length < productsLimitOnPage
        ) {
            await loadMoreProducts();
        }
    });

    await loadMoreProducts();
});
