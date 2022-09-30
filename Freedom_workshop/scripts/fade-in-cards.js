const infoBlock = document.querySelectorAll(".info-block");
const faChevronDown = document.querySelector(".fa-chevron-down");
const audioMesLink = document.getElementById("audio-mes-link");

window.addEventListener("scroll", reveal);

function scrollDown() {
  faChevronDown.scrollIntoView();
}
function triggerScrollDown() {
  setTimeout(scrollDown, 500);
}
if (window.location.href.indexOf("audio.html#home-link") > -1) {
  triggerScrollDown();
}

function reveal() {
  for (let i = 0; i < infoBlock.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = infoBlock[i].getBoundingClientRect().top;
    let revealPoint = 240;

    if (revealTop < windowHeight - revealPoint) {
      infoBlock[i].classList.add("info-block-active");
      infoBlock.forEach((block, index) => {
        block.style.transition = `opacity ${0.5 + index / 4}s ease-in-out`;
      });
    } else {
      infoBlock[i].classList.remove("info-block-active");
      infoBlock.forEach((block, index) => {
        block.style.transition = `opacity ${0.25 + index / 7}s ease-in-out`;
      });
    }
  }
}
