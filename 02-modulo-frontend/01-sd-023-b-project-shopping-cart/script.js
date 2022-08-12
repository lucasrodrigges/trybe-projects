const $ = (args) => document.querySelector(args);
const $$ = (args) => document.querySelectorAll(args);
const ol = document.getElementsByClassName('cart__items')[0];

const loading = () => {
  const section = document.getElementsByClassName('items')[0];
  const p = document.createElement('p');
  p.innerText = 'carregando...';
  p.id = 'loading';
  section.append(p);
};

const deleteLoading = () => {
  const load = document.getElementById('loading');
  load.innerText = '';
};

const totalPrice = () => {
  let result = 0;
  const arrSTr = ol.innerHTML.split(' ');
  const lastArr = arrSTr.filter((el) => el.startsWith('$'));
  lastArr.forEach((el) => {
    result += +el.match(/\d+/g).join('.');
  });

  $('.total-price').innerHTML = result;
};

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const cartItemClickListener = () => {
  $('.cart__item').remove();
  saveCartItems(ol.innerHTML);
  totalPrice();
};

const createCartItemElement = ({ name, salePrice, image }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerHTML = `<img src="${image}" class="cart-tem-img"> ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const checkFetch = (e) => {
  const elementToFetch = e.target.parentNode.firstChild.innerHTML;
  fetchItem(elementToFetch).then((el) => {
    const { title, price, thumbnail } = el;
    const obj = { name: title, salePrice: price, image: thumbnail };
    ol.append(createCartItemElement(obj));
    saveCartItems(ol.innerHTML);
    totalPrice();
  });
};

const cartList = () => {
  const allAddBtns = $$('.item__add');
  allAddBtns.forEach((btn) => {
    btn.addEventListener('click', checkFetch);
  }); 
};  

const computerList = (args) => {
  fetchProducts(args)
    .then((el) => {
      const { results } = el;
      const itemsSection = document.getElementsByClassName('items')[0];
      results.forEach(({ id, title, thumbnail }) => {
        const obj = { sku: id, name: title, image: thumbnail };
        itemsSection.appendChild(createProductItemElement(obj));
        cartList();
        totalPrice();
      });
    }); 
};

const delCartItem = () => {
  const cartItems = $$('.cart__item');
  cartItems.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
  totalPrice();
};

const cartClear = () => {
  while (ol.firstChild) ol.firstChild.remove();
  totalPrice();
  saveCartItems(ol.innerHTML);
};

const hideOrShowCart = () => {
  const cart = $('.cart');
  const containerCart = $('.container-cartTitle');
  if (cart.style.display === 'none') {
    cart.style.display = 'flex';
    containerCart.style.display = 'flex';
  } else {
  containerCart.style.display = 'none';
  cart.style.display = 'none';
  }
};

const hideCart = () => {
  const cart = $('.cart');
  const containerCart = $('.container-cartTitle');
  containerCart.style.display = 'none';
  cart.style.display = 'none';
};

const pageReload = () => window.location.reload();

window.addEventListener('load', () => { 
  loading();
  computerList('macbook');
  deleteLoading();
  hideCart();
  $('.material-icons').addEventListener('click', hideOrShowCart);
  if (localStorage.length > 0) {
    ol.innerHTML = getSavedCartItems('cartItems');
    delCartItem();
  }
  $('.empty-cart').addEventListener('click', cartClear);
  $('.btn-search').addEventListener('click', () => {
    const input = $('.input-search');
    $('.items').innerHTML = '';
    computerList(input.value);  
  });
  $('.title').addEventListener('click', pageReload);
  totalPrice();
});
