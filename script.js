document.addEventListener(('DOMContentLoaded'),  ()=> {
let gridContainer=document.querySelector('.book-grid')
let Library=[]
let removeButton=document.querySelector('.card')
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
  this.deleteIcon.classList.add('fa-solid', 'fa-trash');
  this.deleteIcon.setAttribute('id', 'remove');
  this.editIcon=document.createElement('i');
  this.editIcon.classList.add('fa-pen-to-square', 'fa-solid')
  
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
  if (read){
    this.readCheckInput.setAttribute('checked', `${this.read}`);
  }

  gridContainer.appendChild(this.card)

  this.changeReadStatus=function(){
    this.readOrNot.textContent=this.readCheckInput.checked ? 'Read' : 'Unread'
  }
  this.changeReadStatus()

  return this
}
for (let i=0;i<6;i++){
  Library.push(new Book('How to make work', "sausage", i, i%2==0 ))
}
let readInputs=document.querySelectorAll('.checkbox')
function handleCheckboxChange(event) {
  const checkbox = event.target;
  const book = Library.find(book => book.id === parseInt(checkbox.id));
  book.changeReadStatus();
}

gridContainer.addEventListener('change', handleCheckboxChange);
})