const buttonMasuk = document.getElementsByClassName('btnMasuk')[0]
const togglePassword = document.querySelector('.fas');
var password = document.querySelector('#inputPassword');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');

// chagen background color btnMasuk
buttonMasuk.onclick = ()=>{
  buttonMasuk.style.background = "#ffb900"
}

// Password Visibility
togglePassword.onclick = () => {
      // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    const icon = togglePassword.className
    if(icon === "fas fa-eye-slash"){
      togglePassword.classList.remove("fa-eye-slash")
      togglePassword.classList.toggle("fa-eye")
    } else{
      togglePassword.classList.remove("fa-eye")
      togglePassword.classList.toggle("fa-eye-slash")
    }
}

// Border outline when click
inputEmail.onmouseout = ()=>{
  if(inputEmail.value !== ''){
    inputEmail.style.borderColor = 'black'
  } else {
    inputEmail.style.borderColor = '#ced4da'
  }
}
inputPassword.onmouseout = ()=>{
  if(inputPassword.value !== ''){
    inputPassword.style.borderColor = 'black'
    togglePassword.style.color = 'black'
  } else {
    inputPassword.style.borderColor = '#ced4da'
    togglePassword.style.color = '#ced4da'
  }
}

inputPassword.onclick = ()=>{
  togglePassword.style.color= 'black'
}