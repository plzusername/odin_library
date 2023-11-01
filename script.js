let library=[]

function Book(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.id=library.length
    this.makeBook=function(){
        let card=document.createElement('div')
        let title=document.createElement('h2')
        let authors=document.createElement('span')
        let pages=document.createElement('p')
        let iconCon=document.createElement('div')
        let readCon=document.createElement('div')
        let read=document.createElement('input');read.setAttribute("type", "checkbox");
        let label=document.createElement('label')
        let edit=document.createElement('i');edit.setAttribute('class','fa-pen-to-square fa-solid')
        let remove=document.createElement('i');remove.setAttribute('class','fa-solid fa-trash')
    }
}
