const searchbtn = document.querySelector('#search-btn');
const search = document.querySelector('.search-form');
const cartbtn = document.querySelector('#cart-btn');
const cart = document.querySelector('.shopping-cart');
const loginbtn = document.querySelector('#login-btn');
const login = document.querySelector('.login-form');
const menubtn = document.querySelector('#menu-btn');
const nav = document.querySelector('.navbar');
searchbtn.addEventListener('click', () => {
  /*when you toggle a class then in css not give space b/w that class from its parent class(.search-form)*/
  search.classList.toggle('active');
  cart.classList.remove('active');
  nav.classList.remove('active');
  login.classList.remove('active');
})
document.addEventListener('click', (e) => {
  let isClickInside = false;
  let elements = [search, searchbtn, cartbtn, cart, loginbtn, login, menubtn, nav];
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].contains(e.target)) {
      console.log(e.target)
      isClickInside = true;
      break;
    }
  }
  if (!isClickInside) {
    search.classList.remove('active');
    cart.classList.remove('active');
    login.classList.remove('active');
    nav.classList.remove('active');
  }

})

// let cartbtn = document.querySelector('#cart-btn');
// const cart = document.querySelector('.shopping-cart');
cartbtn.addEventListener('click', () => {
  cart.classList.toggle('active');
  nav.classList.remove('active');
  search.classList.remove('active');
  login.classList.remove('active');
})

// const loginbtn = document.querySelector('#login-btn');
// const login = document.querySelector('.login-form');
loginbtn.addEventListener('click', () => {
  login.classList.toggle('active');
  cart.classList.remove('active');
  nav.classList.remove('active');
  search.classList.remove('active');
})

// let menubtn = document.querySelector('#menu-btn');
// const nav = document.querySelector('.navbar');
menubtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  login.classList.remove('active');
  search.classList.remove('active');
  cart.classList.remove('active');
})
window.onscroll = () => {
  nav.classList.remove('active');
  login.classList.remove('active');
  search.classList.remove('active');
  cart.classList.remove('active');
}

var swiper = new Swiper(".products-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});