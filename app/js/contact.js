// const form = document.getElementById("form_message");
const form = document.querySelector("#form_message");
form.addEventListener('submit', sendMail);

function sendMail(e) {
  e.preventDefault();
  Email.send({
    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To : 'silbelg@gmail.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}