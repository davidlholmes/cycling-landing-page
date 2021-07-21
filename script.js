/* Rides page show-hide additional videos */

function toggleShow() {
  let thumbNails = document.getElementById("show-hide-div");
  let toggleShowButton = document.querySelector("#toggle-show-button");
  let displaySetting = thumbNails.style.display;

  if (displaySetting == 'none') {
    thumbNails.style.display = 'flex';
    toggleShowButton.innerHTML = 'Show Fewer Videos'
  } else {
    thumbNails.style.display = 'none';
    toggleShowButton.innerHTML = 'Show More Videos'
  }
  /*
  toggleShowButton.addEventListener('click', function () {
    thumbNails.style.display = "flex";
  })*/
}



/* Contact page verify email */

