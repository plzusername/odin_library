let gridContainer=document.querySelector('.book-grid')
let Library=[]
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
  this.readOrNot=document.createElement('label');this.readOrNot.setAttribute('for',`${this.id}`)
  this.readCheckInput=document.createElement('input');readCheckInput.setAttribute('type','checkbox');this.readCheckInput.setAttribute('id',`${this.id}`)
  this.icons_container=document.createElement('div')
  this.deleteIcon=document.createElement('i');deleteIcon.setAttribute('class','fa-solid fa-trash')
  this.editIcon=document.createElement('i');editIcon.setAttribute('class','fa-pen-to-square fa-solid')
  
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

  this.card.setAttribute('class','card')
  this.cardFooter.setAttribute('class','cardFooter')
  this.readContainer.setAttribute('class','readContainer')

  gridContainer.appendChild(this.card)
}
Library.push(Book('How to make it', "Suasage's", 97, 'Read' ))