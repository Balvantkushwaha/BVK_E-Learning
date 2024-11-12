09//search botton effect 
let searchForm =document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>
{
    searchForm.classList.toggle('active');
    navbarMaxWidth768.classList.remove('active');
    shoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');

}

// cart botton effect or shoping  
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=()=>
{
    shoppingCart.classList.toggle('active'); 
    LoginForm.classList.remove('active');
    searchForm.classList.remove('active');
    navbarMaxWidth768.classList.remove('active');


}

//login form or user form
let LoginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>
{
    LoginForm.classList.toggle('active'); 
    navbarMaxWidth768.classList.remove('active');
    shoppingCart.classList.remove('active');  
    searchForm.classList.remove('active');      

}

//navbar effect max - width 768 px par
let navbarMaxWidth768 = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>
{
    navbarMaxWidth768.classList.toggle('active');
    shoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
    searchForm.classList.remove('active');

}

window.onscroll=()=>
{
    navbarMaxWidth768.classList.remove('active');
    shoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
    searchForm.classList.remove('active');
    
}




  var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
      delay : 7500,
      disableOnInteraction:false,
    },
    breakpoints: {

      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });