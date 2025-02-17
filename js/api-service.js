const BASE_URL = "https://brandstestowy.smallhost.pl/api/random";

window.productsLoading = false;

/**
 * Pobiera dane z API.
 * @param {number} pageNumber - Numer strony.
 * @param {number} pageSize - Liczba elementów na stronę.
 * @returns {Promise<Array>} - Tablica produktów.
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
