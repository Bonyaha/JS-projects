const url = 'https://course-api.com/javascript-store-single-product';

const productDOM = document.querySelector('.product');

const fetchProducts = async () => {
  productDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`;

  try {
    //take url of page and вычленяем id
    const params = new URLSearchParams(window.location.search);

    const id = params.get('id');

    const resp = await fetch(`${url}?id=${id}`);

    const data = await resp.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};

const displayProduct = (product) => {
  // company, colors, description, name:title, price, image(url:img)
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const { url: img } = image[0];
  document.title = title.toUpperCase();

  //colors
  const colorsList = colors
    .map((color) => {
      return `<span class="product-color"
        style="background: ${color}"></span>`;
    })
    .join('');
  productDOM.innerHTML = `<div class="product-wrapper">
  <img src="${img}" class="img
  alt="${title} />
  <div class="product-info">
 <h3>${title}</h3> 
 <h5>${company}</h5> 
 <span>${price / 100}</span>
 <div class="colors">${colorsList}</div>
  </div>
  <p>${description}</p>
  </div>`;
};

const start = async () => {
  const data = await fetchProducts();
  console.log(data);
  displayProduct(data);
};
start();
