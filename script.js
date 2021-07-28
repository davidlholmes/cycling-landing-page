/* Rides page show-hide additional videos */
/* This code WORKS so DO NOT touch! */
let toggleShowButton = document.getElementById("toggle-show-button");
let thumbNails = document.getElementById("show-hide-div");

function toggleShow() {
  
  if (thumbNails.style.display === 'none') {
    thumbNails.style.display = 'flex';
    toggleShowButton.innerHTML = 'Show Fewer Videos'
  } else {
    thumbNails.style.display = 'none';
    toggleShowButton.innerHTML = 'Show More Videos'
  }
}

toggleShowButton.addEventListener('click', function(event) {
  toggleShow();
})
/* End code that works. */


/* Contact page verify email */



let submitButton = document.getElementById("emailSubmit");

function submitEmail() {
  let email = document.getElementById("emailInput").value;
  let emailMsg = document.getElementById("emailMsg").value;

  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) === true) {
    emailMsg.innerHTML = "<p>Thank you! Your address has been added.</p>";
  } else {
    alert("Enter a valid email address.");
  }
};

submitButton.addEventListener('click', function(event) {
  submitEmail();
});

// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

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