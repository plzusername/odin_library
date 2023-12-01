document.addEventListener(('DOMContentLoaded'),  ()=> {
let gridContainer=document.querySelector('.book-grid')
let Library=[]
let makeBookButton=document.querySelector('.add-book')
let modal=document.querySelector('.modal-container')
let closeFormButton=document.querySelector('.fa-xmark')
let overlay=document.querySelector('.overlay')
let form=document.querySelector('form')
let titleS=document.getElementById('title')
let authorS=document.getElementById('Author')
let pagesS=document.getElementById('page-count')
let readQuestion=document.querySelector('.read-or-not')
let modal_title=document.querySelector('.modal-title')
function removeForm(){
  overlay.classList.remove('visible')
  modal.classList.remove('shown')
}
function showForm(){
  overlay.classList.add('visible')
  modal.classList.add('shown')
}
function Book(title,author,pages,read){
  this.title=title
  this.author=author
  this.pages=pages
  this.read=read
  this.id=Library.length
  
  this.card=document.createElement('div')
  this.titleE=document.createElement('h2')
  this.authorE=document.createElement('span')
  this.pagesE=document.createElement('p')
  this.cardFooter=document.createElement('div')
  this.readContainer=document.createElement('div')
  this.readOrNot=document.createElement('label');
  this.readOrNot.setAttribute('for',`${this.id}`)
  this.readCheckInput=document.createElement('input');
  this.readCheckInput.setAttribute('type','checkbox');
  this.readCheckInput.setAttribute('class','checkbox');
  this.readCheckInput.setAttribute('id',`${this.id}`)
  this.icons_container=document.createElement('div')
  this.deleteIcon=document.createElement('i');
  this.deleteIcon.setAttribute('id',`${this.id}`)
  this.deleteIcon.classList.add('fa-solid', 'fa-trash');
  this.editIcon=document.createElement('i');
  this.editIcon.classList.add('fa-pen-to-square', 'fa-solid')
  this.editIcon.setAttribute('id', `${this.id}`)
  
  this.titleEtext=document.createTextNode(`${title}`)
  this.authorEtext=document.createTextNode(`${author}`)
  this.pagesEtext=document.createTextNode(`${pages} pages`)
  this.readOrNotText=document.createTextNode(`${read}`)

  this.titleE.appendChild(this.titleEtext)
  this.authorE.appendChild(this.authorEtext)
  this.pagesE.appendChild(this.pagesEtext)
  this.readOrNot.appendChild(this.readOrNotText)

  this.card.appendChild(this.titleE)
  this.card.appendChild(this.authorE)
  this.card.appendChild(this.pagesE)
  this.card.appendChild(this.cardFooter)
    this.cardFooter.appendChild(this.readContainer)
      this.readContainer.appendChild(this.readCheckInput)
      this.readContainer.appendChild(this.readOrNot)
    this.cardFooter.appendChild(this.icons_container)
      this.icons_container.appendChild(this.deleteIcon)
      this.icons_container.appendChild(this.editIcon)

  this.card.classList.add('card')
  this.cardFooter.classList.add('cardFooter')
  this.readContainer.classList.add('readContainer')
  if (read) this.readCheckInput.setAttribute('checked', `${this.read}`);
  

  gridContainer.appendChild(this.card)

  this.changeReadStatus=function(){
    this.readOrNot.textContent=this.readCheckInput.checked ? 'Read' : 'Unread'
  }
  this.deleteBook = function () {
    this.card.remove()
  }
  this.editBook = function () {
    modal_title.textContent=`Edit Book #${this.id + 1}`
    titleS.value=`${this.titleE.textContent}`
    authorS.value=`${this.authorE.textContent}`
    pagesS.value=`${+this.pagesE.textContent.split(' ')[0]}`
    readQuestion.setAttribute('id',this.id)
    if(this.readCheckInput.checked){
      readQuestion.setAttribute('checked','anythinglol')
    }
    else{
      readQuestion.removeAttribute('checked')
    }
    showForm()
  }
  this.card.addEventListener('dblclick',()=>{
    this.editBook()
  })
  this.changeReadStatus()

  return this
}

function handleCheckboxChange(event) {
  const checkbox = event.target
  const book = Library.find(book => book.id === parseInt(checkbox.id))
  book.changeReadStatus()
}
function editCard(event){
  const editButton = event.target
  if (editButton.classList.contains('fa-pen-to-square')){
    const book = Library.find(book => book.id === parseInt(editButton.id))
    book.editBook()
  }
}
function deleteCard(event){
  const deleteButton = event.target
  if (deleteButton.classList.contains('fa-trash')){
    const book = Library.find(book => book.id === parseInt(deleteButton.id))
    book.deleteBook()
    Library.splice(Library.indexOf(book),1)
    Library.forEach((item, i)=>{
      item.id=i
      item.deleteIcon.setAttribute('id',`${i}`)
      item.editIcon.setAttribute('id',`${i}`)
      item.readCheckInput.setAttribute('id',`${i}`)
      item.readOrNot.setAttribute('for',`${i}`)
    })
  }
}
gridContainer.addEventListener('change', handleCheckboxChange)
gridContainer.addEventListener('click', deleteCard)
gridContainer.addEventListener('click', editCard)
gridContainer.addEventListener('dblclick', ()=>{
})
form.addEventListener('submit',(event)=>{
  event.preventDefault()
  if(modal_title.textContent=='Add book to library') Library.push(new Book(titleS.value,authorS.value,pagesS.value,readQuestion.checked ? true : false))
  else{
    const book = Library.find(book => book.id === parseInt(readQuestion.id))
    book.titleE.textContent=titleS.value
    book.authorE.textContent=authorS.value
    book.pagesE.textContent=pagesS.value
    if(readQuestion.checked){
      book.readCheckInput.setAttribute('checked','f')
    }
    else{
      book.readCheckInput.removeAttribute('checked')
    }
    book.changeReadStatus()
  }
  removeForm()
})
makeBookButton.addEventListener('click',()=>{
  modal_title.textContent=`Add book to library`
  titleS.value=''
  authorS.value=''
  pagesS.value=null
  readQuestion.removeAttribute('checked')
  showForm()
})
overlay.addEventListener('click',()=>removeForm())

closeFormButton.addEventListener('click',()=>removeForm())

document.addEventListener("keydown", (event) =>{if  (event.keyCode === 27 ) removeForm()})

})
