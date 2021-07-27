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


let email = document.getElementById("emailInput").value;
let submitButton = document.getElementById("emailSubmit");
let emailMsg = document.getElementById("emailMsg");

function ValidateEmail(email) {
  if (^ ([a - zA - Z0 -9_\-\.] +)@([a - zA - Z0 -9_\-\.] +) \.([a - zA - Z]{ 2, 5 }) $.test(email) === true) {
    emailMsg.innerHTML("<h3>Thank you! Your address has been added.</h3>");
  } else {
    alert("Enter a valid email address.");
  }
};

submitButton.addEventListener('click', ValidateEmail(email));

// ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$

// ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$

// /\S+@\S+\.\S+/
  // const atLocation = value.lastIndexOf("@");
  // const dotLocation = value.lastIndexOf(".");
/*const atLocation = value.lastIndexOf("@");
const dotLocation = value.lastIndexOf(".");
if (
  atLocation > 0 &&
  dotLocation > atLocation + 1 &&
  dotLocation < value.length - 1
)

/*
if (
  atLocation > 0 &&
  dotLocation > atLocation + 1 &&
  dotLocation < value.length - 1
)*/






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