const buttonDaftar = document.getElementsByClassName('btnDaftar')[0]
const checkboxSyarat = document.getElementById('checkboxSyarat')
const formControl = document.querySelectorAll('.form-control');
const togglePassword = document.querySelector('.fas');
var password = document.querySelector('#inputPassword');
// console.log(checkboxSyarat);

buttonDaftar.onclick = ()=>{
  buttonDaftar.style.background = "#999a9e"
}

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

checkboxSyarat.onchange = ()=>{
  if (checkboxSyarat.checked == true){
      buttonDaftar.disabled = false;
  } else {
      buttonDaftar.disabled = true;
}
}
formControl.forEach(item => {
  item.addEventListener('mouseout', event => {
  if(item.value !== ''){
    item.style.borderColor = 'black'
  } else {
    item.style.borderColor = '#ced4da'
  }
  })
})
