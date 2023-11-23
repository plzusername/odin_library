let library = [];
let box_grid = document.querySelector('.book-grid');
let button=document.querySelector('button')
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = library.length;
  this.makeBook = function () {
    this.card = document.createElement('div');
    this.titleT = document.createElement('h2');
    this.authors = document.createElement('span');
    this.pagesT = document.createElement('p');
    this.label = document.createElement('label');this.label.setAttribute('for',this.id)
    this.icons_c=document.createElement('div')
    this.icons_cc=document.createElement('div')
    this.readA = document.createElement('input');
    this.edit=document.createElement('i');this.edit.setAttribute('class','fa-pen-to-square fa-solid')
    this.removeI=document.createElement('i');this.removeI.setAttribute('class','fa-solid fa-trash')
    this.inp=document.createElement('div')
    this.readA.setAttribute("type", "checkbox");this.readA.setAttribute('id',this.id)

    this.label.textContent = this.readA ? 'read' : 'unread';

    this.titleT.textContent = this.title;
    this.pagesT.textContent = `${this.pages} pages`;
    this.authors.textContent = this.author;

    this.card.appendChild(this.titleT);
    this.card.appendChild(this.authors);
    this.card.appendChild(this.pagesT);
    this.card.appendChild(this.readA);
    this.card.appendChild(this.label);
    this.card.appendChild(this.icons_cc)
    this.inp.appendChild(this.readA)
    this.inp.appendChild(this.label)
    this.icons_cc.appendChild(this.inp)
    this.icons_cc.appendChild(this.icons_c)
    this.icons_c.appendChild(this.removeI)
    this.icons_c.appendChild(this.edit)

    this.card.classList.add('card')
    this.icons_cc.classList.add('icons-c')
    this.readA.classList.add('check')
    this.inp.classList.add('checkG')

    box_grid.appendChild(this.card);

  };
  this.makeBook();
}
function addElement(title,author,pages,read){library.push(new Book(title,author,pages,read))}

button.addEventListener('click',()=>{
  addElement('Sausage','HITHERE',97,'read')
  // let cards = document.querySelectorAll('.card')
  // let decision = library.length<=2?'20rem':'75%'
  // cards.forEach((card) =>{
  //   card.style.width=decision
  // })
  // col_size=library.length<=3? library.length:3
  // box_grid.style.gridTemplateColumns=`repeat(${col_size},auto)`
})
addElement('How to do it', 'Baby bear + hat', 98.9,true)
addElement('How to do it', 'Baby bear + hat', 98.9,true)
