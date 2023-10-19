const featuredProductsContainer = document.getElementById('featured-box');

// Fetch JSON data from a URL
fetch('product.json')
  .then((response) => response.json())
  .then((data) => {
    // Filter the featured products
    const featuredProducts = data.filter((product) => product.featured === true);

    // Generate HTML for featured products
    featuredProducts.forEach((product) => {
      const featuredProduct = document.createElement('div');
      featuredProduct.className = 'featured-product';

      featuredProduct.innerHTML = `<div class="image-container">
        <img src="${product.imageSrc}" width="100%" height="200px" alt="${product.makes}" /></div>
        <div class="content">
          <h3 class="model-line">${product.makes} ${product.model}</h3>
          <h5 class="Price-line">Price<span class="Price-S"> $${product.price}</span></h5>
          <div class="feature-table">
    <div class="content-1">
        <div class="feature-1">
            <span>Fuel Efficiency</span>
            <span>7.1/8.1L</span>
        </div>
    <div class="feature-2">
        <small>L/100km</small>
        <span>city/highway</span>
    </div></div>
    <div class="content-2">
        <div class="feature-3">
            <small>Engine</small>
            <span>Horsepower</span>
            </div>
        <div class="icon-tag">
            <span class="tag-1">
                <img src="Images/engine-motor-icon.svg" alt="Icon Sedans">16v multi</span>
            <span class="tag-1">
                <img src="Images/kwh-icon.svg" alt="Icon Sedans">135hp</span></div></div>
                <button class="btn-feature"><a href="${product.link}" style="color:white;">view details</a></button>
</div></div>`;

      // Append the featured product directly to the container
      featuredProductsContainer.appendChild(featuredProduct);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });




document.getElementById('applyfilter').addEventListener('click', function () {
  let brandFilterValue = document.querySelector('#companyfilter').value;
  let modelFilterValue = document.querySelector('#modelfilter').value;

  // Save filter values to localStorage
  sessionStorage.setItem('companyfilter', brandFilterValue);
  sessionStorage.setItem('modelfilter', modelFilterValue);

  // Redirect to the other page
  window.location.href = 'products.html';
});