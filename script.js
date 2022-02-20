// select the 'a' tag that has the mailto link to reference later in the code.
var contactLink = document.getElementById("contact-link");
// add click event listener to that 'a' tag.
contactLink.addEventListener("click", function () {
  // get all the information required by getting the inputs and the select tags values.
  var newName = document.getElementById("newName").value,
    newEmail = document.getElementById("newEmail").value,
    /* the subject variable holds the subject of the email, change its value per your requirement. */
    subject = "New Email Submitted to SmokedSeltzer Waitlist",
    /* the queryString variable holds the email's subject and body to be used in the href attribute of the 'a' tag. the '\n' character is used to make a new line and it must be encoded, along with other special characters as the space, in a valid URL format, we'll be using the built-in 'encodeURI' method for that task. */
    queryString =
      "?subject=" + subject + "&body=Name: " + newName + "\nEmail: " + newEmail,
    /* the emailAddr variable holds the email which you want the email to be sent to. Change its value per your requirement. */
    emailAddr = "hmjackson917@gmail.com";
  /* assign the href attribute of the 'a' tag by the queryString variable's value prepended by the desired email adress, and encode all the resulted string in the URL format using the built-in 'encodeURI' method. */
  this.href = window.encodeURI("mailto:" + emailAddr + queryString);
  // just for testing to see the resulted href string. Delete this line in production phase.
  console.log(this.href);
});

console.log("hello world");