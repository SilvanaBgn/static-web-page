document.getElementById("form_message").addEventListener('submit', sendMail);

function sendMail(e) {
  e.preventDefault();
  const tempParams = {
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    from_email: document.getElementById("from_email").value,
    replay_to: document.getElementById("from_email").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_jhr1jur","template_u27q6lj", tempParams).then((res,err)=>{
    err ? console.log("Error:", err) : console.log("Success:", res);
  });
}