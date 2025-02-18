const BASE_URL = "https://brandstestowy.smallhost.pl/api/random";

window.productsLoading = false;

/**
 * Gets data from API
 * @param {number} pageNumber - Page number.
 * @param {number} pageSize - Number of items per page.
 * @returns {Promise<Array>} - Product array.
 */
const fetchProducts = async(pageNumber = 1, pageSize = 20) => {
    try {
        window.productsLoading = true;
        const response = await fetch(`${BASE_URL}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
        window.productsLoading = false;
    
        if (!response.ok) throw new Error(`Błąd HTTP: ${response.status}`);
        return response.json();
    } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
        return [];
    }
}

window.fetchProducts = fetchProducts;
