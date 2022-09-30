const burger = document.querySelector(".burger");
const mainNav = document.querySelector(".main-nav");
const plusSign1 = document.querySelector(".plus-sign1");
const plusSign2 = document.querySelector(".plus-sign2");
const mainNavLi = document.querySelector(".main-nav li");
const secNavList1 = document.querySelector(".sec-nav-list1");
const secNavList2 = document.querySelector(".sec-nav-list2");
const toggle1 = document.querySelector(".toggle1");
const toggle2 = document.querySelector(".toggle2");
const mediaQueryMin = window.matchMedia("(min-width: 768px");
const mediaQueryMax = window.matchMedia("(max-width: 768px");

burger.addEventListener("click", function () {
  mainNav.classList.toggle("active-nav");
  burger.classList.toggle("close-menu");
});

toggle1.addEventListener("click", function () {
  secNavList1.classList.toggle("sec-nav-list-active");
});
toggle2.addEventListener("click", function () {
  secNavList2.classList.toggle("sec-nav-list-active");
});

function handleTabletChange(e) {
  if (e.matches) {
    secNavList1.classList.remove("sec-nav-list-active");
    burger.classList.remove("close-menu");
    mainNav.classList.remove("active-nav");
  }
}

mediaQueryMin.addEventListener("change", handleTabletChange);

handleTabletChange(mediaQueryMin);

// copyright updater

/* const copyrightYear = document.querySelector(".current-year");

function updateYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  copyrightYear.innerHTML = `${currentYear}`;
}
updateYear(); */
