const russianImgEl = document.querySelector("[data-russian-img]");
const chineseImgEl = document.querySelector("[data-chinese-img]");
const spanishImgEl = document.querySelector("[data-spanish-img]");
const indonesianImgEl = document.querySelector("[data-indo-img]");
//russia
const russiaBlockEl = document.querySelector("[data-ru-block]");
const stepsLi = document.querySelector("[data-ru-steps]");
const honestyLi = document.querySelector("[data-ru-honesty]");
const scriptureLi = document.querySelector("[data-ru-scripture]");
const winnersLi = document.querySelector("[data-ru-winners]");
//chinese
const chineseBlockEl = document.querySelector("[data-ch-block]");
const chineseBookletEl = document.querySelector("[data-ch-booklet]");
const chineseKnockEl = document.querySelector("[data-ch-knock]");
//indo
const indoBlockEl = document.querySelector("[data-indo-block]");
const indoBookletEl = document.querySelector("[data-indo-booklet]");
const indoEngBookletEl = document.querySelector("[data-indo-eng-booklet]");

function imgSwitch(element, imgEl, source) {
  element.addEventListener("mouseover", () => {
    imgEl.src = source;
  });
}
/* Change back to default img*/
function returnDefaultImg(infoBlockEl, imgEl, defaultImg) {
  infoBlockEl.addEventListener("mouseleave", () => {
    imgEl.src = defaultImg;
  });
}

console.log("viniger");

// russia
returnDefaultImg(russiaBlockEl, russianImgEl, "Img/map-of-russia.webp");
imgSwitch(stepsLi, russianImgEl, "Img/ru-steps-to-freedom.webp");
imgSwitch(honestyLi, russianImgEl, "Img/ru-honesty-with-god.webp");
imgSwitch(scriptureLi, russianImgEl, "Img/ru-scripture-memory-verses.webp");
imgSwitch(winnersLi, russianImgEl, "Img/ru-we-are-winners.webp");
// Chinese
returnDefaultImg(chineseBlockEl, chineseImgEl, "Img/map-of-china.webp");
imgSwitch(chineseBookletEl, chineseImgEl, "Img/ch-fw-booklet.webp");
imgSwitch(chineseKnockEl, chineseImgEl, "Img/ch-knock-knock.webp");
//indo
returnDefaultImg(indoBlockEl, indonesianImgEl, "Img/map-of-indonesia.webp");
imgSwitch(indoBookletEl, indonesianImgEl, "Img/indo-booklet.webp");
imgSwitch(indoEngBookletEl, indonesianImgEl, "Img/indo-eng-booklet.webp");
