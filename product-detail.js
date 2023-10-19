// Get the product ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
console.log('Product ID:', productId);

// Fetch JSON data (assuming 'product-data.json' contains your product details)
fetch('product-detail.json') // Replace with your JSON file's path
    .then((response) => response.json())
    .then((data) => {
        // Find the product with the matching ID
        if (Array.isArray(data) && data.length > 0 && 'id' in data[0]) {
            // Find the product with the matching ID
            const product = data.find((p) => p.id === parseInt(productId));
                // Your code here
            
            
            // Display the product details
            if (product) {
                const productDetailsContainer = document.getElementsByClassName('main-container')[0];
                productDetailsContainer.innerHTML =`<div uk-grid class="product-width"><div class="uk-width-1-2" uk-lightbox="animation: slide">
                <div id="slideshow" class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>
                
                    <div class="uk-slideshow-items">
                        <div>
                        <a href="${product.imageSrc[0]}">
                            <img src="${product.imageSrc[0]}" alt="" uk-cover></a>
                        </div>
                        <div>
                        <a href="${product.imageSrc[1]}">
                        <img src="${product.imageSrc[1]}" alt="" uk-cover></a>
                        </div>
                        <div>
                        <a href="${product.imageSrc[2]}">
                        <img src="${product.imageSrc[2]}" alt="" uk-cover></a>
                        </div>
                      <div>
                      <a href="${product.imageSrc[3]}">
                      <img src="${product.imageSrc[3]}" alt="" uk-cover></a>
                        </div>

                        ${product.imageSrc[4] ? `<div>
                      <a href="${product.imageSrc[4]}">
                      <img src="${product.imageSrc[4]}" alt="" uk-cover></a>
                        </div>`: ""}

                        ${product.imageSrc[5] ? `<div>
                      <a href="${product.imageSrc[5]}">
                      <img src="${product.imageSrc[5]}" alt="" uk-cover></a>
                        </div>`: ""}
                    </div>
                
                    <a class="uk-position-center-left uk-position-small " href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                    <a class="uk-position-center-right uk-position-small " href="#" uk-slidenav-next uk-slideshow-item="next"></a>
                
                </div>
                <div id="slider" class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="center: true">
                
                    <ul class="uk-slider-items uk-grid uk-thumbnav">
                        <li class="uk-width-1-4" uk-slideshow-item="0">
                            <div class="uk-panel image-panel">
                                <img src="${product.imageSrc[0]}" alt="">
                                <div class="uk-position-center uk-panel"></div>
                            </div>
                        </li>
                        <li class="uk-width-1-4" uk-slideshow-item="1">
                            <div class="uk-panel image-panel">
                                <img src="${product.imageSrc[1]}" alt="">
                                <div class="uk-position-center uk-panel"></div>
                            </div>
                        </li>
                        <li class="uk-width-1-4" uk-slideshow-item="2">
                            <div class="uk-panel image-panel">
                                <img src="${product.imageSrc[2]}" alt="">
                                <div class="uk-position-center uk-panel"></div>
                            </div>
                        </li>
                        ${product.imageSrc[3] ? `<li class="uk-width-1-4" uk-slideshow-item="3">
                            <div class="uk-panel image-panel">
                                <img src="${product.imageSrc[3]}" alt="">
                                <div class="uk-position-center uk-panel"></div>
                            </div>
                        </li>`: ""}
                        ${product.imageSrc[4] ? `<li class="uk-width-1-4" uk-slideshow-item="4">
                            <div class="uk-panel image-panel">
                                <img src="${product.imageSrc[4]}" alt="" >
                                <div class="uk-position-center uk-panel"></div>
                            </div>
                        </li>`: ""}
                        ${product.imageSrc[5] ? `<li class="uk-width-1-4" uk-slideshow-item="5">
                            <div class="uk-panel image-panel">
                                <img src="${product.imageSrc[5]}" alt="">
                                <div class="uk-position-center uk-panel"></div>
                            </div>
                        </li>`: ""}
                    </ul>
                
                    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
                </div>
                </div></div>
              <div class="quality">
                <div class="title">${product.makes}<span class="model-thin">${product.model}</span></div>
                <div class="Price-car">&#163;${product.price}</div>
                <div class="features-content">
                    <table>
                        <tbody>
                            <tr class="t-row">
                                <td>Mileage</td>
                                <td class="light-weight">23000/km</td>
                            </tr>
                            <tr class="t-row">
                                <td>Transmission</td>
                                <td class="light-weight">Automatic</td>
                            </tr>
                            <tr class="t-row">
                                <td>Registration Date</td>
                                <td class="light-weight">2012</td>
                            </tr>
                            <tr class="t-row">
                                <td>Fuel Type</td>
                                <td class="light-weight">Diesel</td>
                            </tr>
                            <tr class="t-row">
                                <td>Body Type</td>
                                <td class="light-weight">Metal</td>
                            </tr>
                        </tbody>
                    </table>
                    <button id="contact-info"><img src="Images/reshot-icon-phone.svg" alt=""><span class="previoustext">Message Seller</span></button>
                    <div class="featured">
                        <h4 class="feature-h4">Car Features</h4>
                        <ul id="specs">
                            <li>360 degree Camera</li>
                            <li>Air Bags</li>
                            <li>Air Conditioning</li>
                            <li>Digital Radio</li>
                            <li>Tyre Pressure Monitor</li>
                            <li>Panaromic Sliding Sunroof</li>
                            <li>Apple Car Play</li>
                        </ul>
                    </div>
                </div>
            
            </div>
            </div>`;
                // Your JavaScript code here
            
               UIkit.util.on("#slider li",'click', function(){
  UIkit.slideshow('#slideshow').show(this.getAttribute('uk-slideshow-item'));
});
UIkit.util.on("#slideshow",'itemshow', function(a,b){
  UIkit.slider("#slider").show(b.index);

  changetext = document.getElementById('contact-info');
  displaytext = document.getElementsByClassName('previoustext')[0];
  changetext.addEventListener('click', function() {
    // Change the text content of the text element
    displaytext.textContent = '03204585258';
  });

// Function to move the container element
function moveContainer() {
    var parent1 = document.querySelector('.product-width');
    var parent2 = document.querySelector('.quality');
    var container = document.querySelector('.featured');

    if (window.matchMedia('(max-width: 768px)').matches) {
        // Media query condition is met
        parent2.appendChild(container); // Move the container to parent2
    } else {
        // Media query condition is not met (optional: move it back to parent1)
        parent1.appendChild(container);
    }
}

// Initial move when the page loads (in case the media query is met initially)
moveContainer();

// Add a media query listener to detect changes in the media query condition
window.matchMedia('(max-width: 768px)').addListener(moveContainer);

});
            
            } 
    else {
                // Handle the case where the product ID doesn't exist
                console.error('Product not found.');
            }
        } else {
            console.error('Invalid data format.');
        }
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
    
    