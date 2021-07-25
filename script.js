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
}



/* Contact page verify email */


const EmailField = document.getElementById("emailInput").value;
const SubmitButton = document.getElementById("email");
const writeToPage = document.getElementById("emailDiv");

function ValidateEmail(EmailField) {
  const atLocation = value.lastIndexOf("@");
  const dotLocation = value.lastIndexOf(".");

  if (
    atLocation > 0 &&
    dotLocation > atLocation + 1 &&
    dotLocation < value.length - 1
  ) {
    writeToPage.innerHTML("<h3>Thank you! Your address has been added.</h3>");
  } else {
    writeToPage.innerHTML("Enter a valid email address.");
  }
}

SubmitButton.addEventListener('click', ValidateEmail(EmailField));
SubmitButton.addEventListener("click", function () { alert("Hello World!") });
/* Copied from https://www.w3resource.com/javascript/form/email-validation.php */
/*SubmitButton.addEventListener("click", function () {
  function ValidateEmail(EmailField) {
    const atLocation = value.lastIndexOf("@");
    const dotLocation = value.lastIndexOf(".");
    if (
      atLocation > 0 &&
      dotLocation > atLocation + 1 &&
      dotLocation < value.length - 1
    ) {
      writeToPage.innerHTML("<h3>Thank you! Your address has been added.</h3>");
    } else {
      alert("Enter a valid email address.");
    };
  };
})


/* End copy */