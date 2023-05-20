 "use strict"
// slider #1
const reviewsSwiper = new Swiper('.reviews__swiper', {
  loop: true,
  speed: 1200,
  arrows: true,
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
      spaceBetween: 30,
      slidesPerView: 1,
      freeMode: true,
    autoHeight: true,
  variableWidth:false,
      watchOverflow: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
  },
       
    autoplay: {
    delay: 5000,
  },
 
  
});

// tabs
const tabNavItems = document.querySelectorAll('.decision-categories__item');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
   let newActiveIndex = null;
  if (targetElement.closest('.decision-categories__item')) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains('active')) {
        currentActiveIndex = index;
        tabNavItem.classList.remove('active');
      }
       if (tabNavItem === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active');
    tabItems[currentActiveIndex].classList.remove('active');
    tabItems[newActiveIndex].classList.add('active');
    
  }
});

// burger
let header__burger = document.querySelectorAll(".header__burger");
let header__menu = document.querySelector(".header__menu");
let back = document.querySelector("body");

header__burger.forEach(function (item) {
  item.onclick = function () {
    item.classList.toggle("active");
    header__menu.classList.toggle("active");
    back.classList.toggle("lock");
  };
});

// spoiler
$(document).ready(function () {
  $(".footer-body__title").click(function (event) {
    if ($(".footer-body__box").hasClass("one")) {
      $(".footer-body__title").not($(this)).removeClass("active");
      $(".footer-body__list").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

