const buttonDaftar = document.getElementsByClassName('btnDaftar')[0]
const checkboxSyarat = document.getElementById('checkboxSyarat')
const formControl = document.querySelectorAll('.form-control');
// console.log(checkboxSyarat);

buttonDaftar.onclick = ()=>{
  buttonDaftar.style.background = "#999a9e"
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
