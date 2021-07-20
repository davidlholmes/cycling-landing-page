
let showMoreButton = document.querySelector(".show-more");
let showFewerButton = document.querySelector(".show-fewer");

/* for (let i = 0; i < ) {
  showMoreButton.addEventListener('click', function () {
    moreVideos.style.display = "flex";
  })
}*/

function showVideos() {
  let moreVideos = document.getElementsByClassName("more-videos");
  if (moreVideos.style.display === "none") {
    moreVideos.style.display = "flex";
  } else {
    moreVideos.style.display = "none";
  }
}