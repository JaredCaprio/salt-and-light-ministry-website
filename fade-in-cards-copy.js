const infoBlock = document.querySelectorAll(".info-block");
const faChevronDown = document.querySelector(".fa-chevron-down");

window.addEventListener("scroll", reveal);

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
