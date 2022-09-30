const videoThumbnail = document.querySelectorAll(".vid-thumb-item");
const thumbsArray = Array.from(videoThumbnail);
const slider = document.querySelector(".slider");

thumbsArray.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", (e) => {
    slider.src = thumbnail.dataset.src;
    slider.play();
  });
});

function selectVideo(link) {
  document.querySelector(".slider").src = link;
  let video = document.querySelector(".slider");
  video.play();
}
