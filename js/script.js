// Phone input
const input = document.querySelector("#phone");

window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function(callback) {
    fetch('https://ipapi.co/json')
      .then(res => res.json())
      .then(data => callback(data.country_code))
      .catch(() => callback("in"));
  },
  separateDialCode: true,
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js"
});

// EmailJS init
(function(){ emailjs.init("RA7Yehviqu_UNulcU"); })();

function sendForm(e){
  e.preventDefault();

  const btn = document.querySelector(".submit");
  const statusMsg = document.getElementById("statusMsg");

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  let isValid = true;

  document.querySelectorAll(".error").forEach(el => el.innerText = "");

  function showError(input, msg){
    input.closest(".field").querySelector(".error").innerText = msg;
    isValid = false;
  }

  const errorMsg = "The field is required.";

  if(!name.value.trim()) showError(name,errorMsg);
  if(!email.value.trim()) showError(email,errorMsg);
  if(!phone.value.trim()) showError(phone,errorMsg);
  if(!message.value.trim()) showError(message,errorMsg);

  if(!isValid) return;

  btn.style.display = "none";
  statusMsg.style.display = "block";

  let time = 6;

  const timer = setInterval(()=>{
    statusMsg.innerText = `Your message has been sent, please wait ${time}s`;
    time--;

    if(time < 0){
      clearInterval(timer);

     emailjs.send("service_y231ani","template_fin8z5k",{
  name: name.value,
  email: email.value,
  phone: phone.value,
  message: message.value
})
.then(()=>{
  statusMsg.innerText = "✅ Thank you! Your message has been received. We will contact you soon.";

  name.value = "";
  email.value = "";
  phone.value = "";
  message.value = "";

  setTimeout(() => {
  window.location.href = window.location.href;
}, 3000);
})
.catch(()=>{
  statusMsg.innerText = "❌ Error sending message";
});
    }

  },1000);
}
