let moreVideos = document.querySelectorAll(".more-videos");
let showMoreButton = document.querySelector(".show-more");
let showFewerButton = document.querySelector(".show-fewer");

showMoreButton.addEventListener('click', function () {
  moreVideos.style.display = "flex";
})