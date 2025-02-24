const hideUnnecessaryProductsBlocks = (productsLimitOnPage) => {
    const productsBlocks = document.querySelectorAll('.product');

    productsBlocks.forEach((block, index) => {
        if (index >= productsLimitOnPage) {
            block.style.display = 'none';
        } else {
            block.style.display = 'flex';
        }
    });
}

document.querySelector("select#product-count").addEventListener("change", function () {
    document.querySelector(".select-box").textContent = this.value;

    hideUnnecessaryProductsBlocks(+this.value);
});
