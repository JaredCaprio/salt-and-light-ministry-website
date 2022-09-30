/* SNL SECTION SELECTORS */

const bookletImgEl = document.querySelector("[data-image-switch-book]");
const mensLiEl = document.querySelector("[data-mens-li]");
const womensLiEl = document.querySelector("[data-womens-li]");
const leadersImgEl = document.querySelector("[data-image-switch-leaders]");
const testSheetEl = document.querySelector("[data-test-sheet]");
const handIllEl = document.querySelector("[data-hand-ill]");
const wheelIllEl = document.querySelector("[data-wheel-ill]");
const cruxEl = document.querySelector("[data-crux]");
const resourceList = document.querySelector("[data-resource-list]");

/* Change back to default img*/
function returnDefaultImg(imgEl, defaultImg) {
  resourceList.addEventListener("mouseleave", () => {
    imgEl.src = defaultImg;
  });
}

/* change img based on hover */
function imgSwitch(element, imgEl, source) {
  element.addEventListener("mouseover", () => {
    imgEl.src = source;
  });
}

/* SNL SECTION FUNCTION CALLS */
imgSwitch(mensLiEl, bookletImgEl, "Img/mens-booklet.webp");
imgSwitch(womensLiEl, bookletImgEl, "Img/S&L_section.webp");
imgSwitch(testSheetEl, leadersImgEl, "Img/before-how-now-screenshot.webp");
imgSwitch(handIllEl, leadersImgEl, "Img/hand-ill-screenshot.webp");
imgSwitch(wheelIllEl, leadersImgEl, "Img/wheel-ill-screenshot.webp");
imgSwitch(cruxEl, leadersImgEl, "Img/crucifixion-screenshot.webp");
returnDefaultImg(leadersImgEl, "Img/S&L_section.webp");
