document.querySelector("select#product-count").addEventListener("change", function () {
    document.querySelector(".select-box").textContent = this.value;
});
