document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', addToList)

  addDeleteButton()

  const deleteAll = document.querySelector('.delete-button')
  deleteAll.addEventListener('click', deleteAllItems)

})

const deleteAllItems = function (event) {
    const elements = document.querySelectorAll('li')
    for (const element of elements) {
        element.remove()
    }
}

const addToList = function(event){
  event.preventDefault()

  const newListItem = document.createElement('li')


  const newReadingTitle = document.createElement('p')
  newReadingTitle.textContent = `Title is ${this.title.value}`

  const newReadingAuthor = document.createElement('p')
  newReadingAuthor.textContent = `Author is ${this.author.value}`

  const newReadingCategory = document.createElement('p')
  newReadingCategory.textContent = `Category is ${this.category.value}`
  
  const list = document.querySelector('#reading-list')
  list.appendChild(newListItem)
  newListItem.appendChild(newReadingTitle)
  newListItem.appendChild(newReadingAuthor)
  newListItem.appendChild(newReadingCategory)

  document.querySelector('#new-item-form').reset()
}

const addDeleteButton = function(){
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete All'
    deleteButton.className = 'delete-button'
    const form = document.querySelector('#new-item-form')
    form.appendChild(deleteButton)

}