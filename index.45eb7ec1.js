function sendEmail(){let e=document.getElementById("name").value,n=document.getElementById("email").value,t=document.getElementById("number").value,a=document.getElementById("whatsNeed").value,o=document.getElementById("learnAboutUs").value,l=document.getElementById("inputError"),m=document.getElementById("loadingButton");""===e?l.innerHTML="The name field cannot be empty!":e.length<2?l.innerHTML="The name cannot be less than 2 letters!":validateEmail(n)?""===a?l.innerHTML="Be sure to let me know how I can help.":(m.classList.add("button--sending"),Email.send({Host:"smtp.elasticemail.com",Username:"pablooeescobaro@gmail.com",Password:"B8D997D8EE74481CC40C0BC15C0F5A9A20F7",To:"pablooeescobaro@gmail.com",From:"kvartalshow@gmail.com",Subject:"Order",Body:`\n      Name: ${e} \n\n      Email: ${n} \n\n      Number: ${t} \n\n      How can we help: ${a} \n\n      How did you learn about us?: ${o}\n      `}).then((function(e){"OK"==e&&(l.classList.add("input__error--green"),l.innerHTML="Message sent"),m.classList.remove("button--sending")}))):l.innerHTML="Invalid email address!"}function validateEmail(e){return!!e.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)}
//# sourceMappingURL=index.45eb7ec1.js.map