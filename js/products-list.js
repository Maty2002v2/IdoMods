const calculateProductsApiParams = (newPageSize) => {
    const productsBlocks = document.querySelectorAll('.product');

    if (!productsBlocks.length || productsBlocks.length < newPageSize) 
        return { pageNumber: 1, pageSize: newPageSize, productsBlocks};
        

    return { pageNumber: Math.floor(productsBlocks.length / newPageSize) + 1, pageSize: newPageSize, productsBlocks };
}

const filterRenderProductsDuplicates = (apiData, renderData) => {
    const renderedProductsIds = [...renderData].map((productBox) => +productBox.dataset.productId);
    return apiData.filter((product) => !renderedProductsIds.includes(product.id));
}

document.addEventListener("DOMContentLoaded", async () => {
    const productContainer = document.getElementById("products-list");

    const loadMoreProducts = async () => {
        const selectValue = +document.querySelector('select#product-count').value ?? 20;
        
        const { pageNumber, pageSize, productsBlocks } = calculateProductsApiParams(selectValue);

        const products = await window.fetchProducts(pageNumber, pageSize);
        if (products.data.length > 0) {
            renderProducts(filterRenderProductsDuplicates(products.data, productsBlocks));
        }
    }

    const renderProducts = (products) => {
        products.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("product");
            div.innerHTML = `<p>ID: ${product.id}</p>`;
            div.dataset.productId = product.id;
            div.addEventListener("click", () => window.showPopup(product.text, product.id));
            productContainer.appendChild(div);
        });
    }

    window.addEventListener("scroll", async () => {
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight && !window.productsLoading
        ) {
            await loadMoreProducts();
        }
    });

    await loadMoreProducts();
});
