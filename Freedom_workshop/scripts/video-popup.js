const videoPopupContainer = document.querySelectorAll(".video-popup-container");
const playButton = document.querySelectorAll(".img-btn-container");
const closeButton = document.querySelectorAll(".close-button");
const video = document.querySelectorAll("video");

playButton[0].addEventListener("click", () => {
  videoPopupContainer[0].showModal();
  video[0].play();
});
playButton[1].addEventListener("click", () => {
  videoPopupContainer[1].showModal();
  video[1].play();
});
playButton[2].addEventListener("click", () => {
  videoPopupContainer[2].showModal();
  video[2].play();
});
playButton[3].addEventListener("click", () => {
  videoPopupContainer[3].showModal();
  video[3].play();
});

closeButton[0].addEventListener("click", () => {
  videoPopupContainer[0].close();
  video[0].pause();
});
closeButton[1].addEventListener("click", () => {
  videoPopupContainer[1].close();
  video[1].pause();
});
closeButton[2].addEventListener("click", () => {
  videoPopupContainer[2].close();
  video[2].pause();
});
closeButton[3].addEventListener("click", () => {
  videoPopupContainer[3].close();
  video[3].pause();
});
