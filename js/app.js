document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('#title')
  title.addEventListener('input', handleTitle)

  const author = document.querySelector('#author')
  author.addEventListener('input', handleAuthor)
  
  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleSubmitForm)
  
  const category = document.querySelector('#category')
  category.addEventListener('change', handleCategoryChange)

  createDeleteAll()

})

const handleTitle = function() {
  const resultParagraph = document.querySelector('#title')
}

const handleAuthor = function () {
  const resultParagraph = document.querySelector('#author')
}

const handleCategoryChange = function () {
  const resultParagraph = document.querySelector('#category')
}

const handleSubmitForm = function(evt) {
  evt.preventDefault();
  const resultParagraph = document.querySelector('#reading-list')
  const createList = document.createElement('li')
  createList.textContent = `Title: ${this.title.value},  Author: ${this.author.value},   Category: ${this.category.value}`
  resultParagraph.appendChild(createList)  
  document.getElementById('new-item-form').reset(); 
}


const createDeleteAll = () => {
  const button = document.createElement("button");
  button.innerHTML = "Delete All";
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(button);
  button.addEventListener ("click", function() {
    document.getElementById('reading-list').innerHTML = "";
  });
}