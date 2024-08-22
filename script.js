document.getElementById('fetchProductBtn').addEventListener('click', fetchProductDetails);

function fetchProductDetails() {
    const apiUrl = 'https://fakestoreapi.com/products/18'; // Fetching another product

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayProductDetails(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayProductDetails(product) {
    const productDiv = document.getElementById('product');
    
    // Create and insert product details
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p><span>Price:</span> $${product.price}</p>
        <p><span>Category:</span> ${product.category}</p>
        <p><span>Description:</span> ${product.description}</p>
    `;
}
