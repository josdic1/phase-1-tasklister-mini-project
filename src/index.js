document.addEventListener("DOMContentLoaded", () => {

//elemental vars
const text = document.getElementById('new-task-description')
const ul = document.getElementById('tasks')
let listHtml;
let listArray = []
let textValue;



document.addEventListener('input', function (e) {
  textValue = text.value.trim()
})

document.addEventListener('submit', function (e) {
  e.preventDefault()
  listArray = [...listArray, textValue]
  listHtml = listArray.map(item => `<li>${item}</li>`).join(''); 
  ul.innerHTML = listHtml
text.value = ''
})




});


