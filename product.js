
// Fetch JSON data
fetch('product.json')
    .then(response => response.json())
    .then(data => {
        // Assuming data is an array of product objects
        const cardContainer = document.querySelector('.card-container');
        //product page filters
        let brandFilter = document.getElementById('brandFilter');
        let categoryFilter = document.getElementById('categoryFilter');
        const priceFilter = document.getElementById('PriceFilter');
        const resetButton = document.querySelector('.reset');
        const searchBox = document.querySelector('.searchTerm');
        // index page filter
        let savedBrandFilter = sessionStorage.getItem('companyfilter') || 'All';
        let savedModelFilter = sessionStorage.getItem('modelfilter') || 'All';
        brandFilter.value = savedBrandFilter;
        categoryFilter.value = savedModelFilter;
        //
        function filterProducts() {
            const selectedBrand = brandFilter.value;
            const selectedCategory = categoryFilter.value;
            const selectedPrice = priceFilter.value;
            const searchValue = searchBox.value.toLowerCase();

            // Clear existing product cards
            cardContainer.innerHTML = '';
        data.forEach(product => {
            if (
                (selectedBrand === 'All' || product.makes === selectedBrand) &&
                (selectedCategory === 'All' || product.model === selectedCategory) &&
                (selectedPrice === 'All' || parseInt(product.price) <= parseInt(selectedPrice)) &&
                (product.makes.toLowerCase().includes(searchValue) || product.model.toLowerCase().includes(searchValue))  
                // && (companyfilter=== 'All' || product.makes === companyfilter) && (modelfilter=== 'All' || product.model === modelfilter)
                
            ){ 
            // Create a product card element
            const productCard = document.createElement('div');
            productCard.className = 'item';

            productCard.addEventListener('click',()=>{
                window.location.href = product.link;
            })

            // Populate product details
            const productImage = document.createElement('img');
            productImage.src = product.imageSrc;
            productImage.alt = 'Product Image';

            const productTitle = document.createElement('h1');
            productTitle.className = "model";
            productTitle.textContent = product.makes + " " + product.model;
            
            const productLink = document.createElement('a');
            productLink.href = product.link; // Replace 'your_link_here.html' with the actual URL

            const productLink1 = document.createElement('a');
            productLink1.href = product.link; // Replace 'your_link_here.html' with the actual URL
            productLink1.textContent = "view details"

            const featuresList = document.createElement('ul');
            featuresList.className = "car-features"
            product.features.forEach(feature => {
                const featureItem = document.createElement('li');
                featureItem.textContent = feature;
                featuresList.appendChild(featureItem);
            });

            const productPrice = document.createElement('h2');
            productPrice.className = "price"
            productPrice.textContent = '£' + product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

            const viewDetailsButton = document.createElement('button');
            viewDetailsButton.className = 'details';
            // viewDetailsButton.textContent = 'View details';
    
            // Append elements to product card
            productCard.appendChild(productImage);
            productCard.appendChild(productLink);
            productCard.appendChild(productTitle);
            productCard.appendChild(featuresList);
            productCard.appendChild(productPrice);
            productCard.appendChild(viewDetailsButton);
            productCard.appendChild(productLink1)
            // Append the product title to the anchor element
            viewDetailsButton.appendChild(productLink1);
            productLink.appendChild(productTitle);

            // Append product card to the container
            cardContainer.appendChild(productCard);
        }
        });
    }

    brandFilter.addEventListener('change', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    searchBox.addEventListener('input', filterProducts);
    // Check if session storage should be cleared when the page is refreshed or revisited
    window.addEventListener('beforeunload', () => {
    // Clear the relevant session storage items
    sessionStorage.removeItem('companyfilter');
    sessionStorage.removeItem('modelfilter');
  });
   filtercontainer = document.querySelector('.sidebar');
   mobilefilter = document.getElementById('mobilefilter');
   mobilefilter.addEventListener('click', function() {
    // Hide the button
    mobilefilter.style.display = 'none';
   filtercontainer.style.display = 'flex';
  });
    // Event listener to reset filters
    resetButton.addEventListener('click', () => {
        brandFilter.value = 'All';
        categoryFilter.value = 'All';
        priceFilter.value = 'All';
        filterProducts();
    });
    filterProducts();
    })
    .catch(error => console.error('Error fetching data:', error));
    //   // JavaScript code for handling filter options
    //   document.getElementsByClassName('mybutton').addEventListener('click', function() {
    //     // Construct the URL with query parameters
    //     const queryParams = new URLSearchParams(window.location.search);
    //     queryParams.set('makes', companyfilter);
    //     queryParams.set('model', modelfilter);
    //     filterProducts();
    //     // Add other filter parameters to queryParams
    //     // Redirect to the product page with filters
    //     window.location.href = `products.html?${queryParams.toString()}`;
    // });
