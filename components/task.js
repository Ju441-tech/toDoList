
import {supprime, setTaskCompleted} from '../app.js'



export function createLi(list){
    const ul=document.querySelector('ul')
    
    
   
    for(let el of list){
       
    const li=document.createElement('li')
    li.classList.add("todo", "list-group-item", "d-flex", "align-items-center")
    const checkBox=document.createElement('input')
    checkBox.type='checkbox'
    checkBox.classList.add("form-check-input")
    //Ajout d'un id pour rendre unique la checkbox et pouvoir retrouver quel li on doit changer en completed:true (il est égal à l'id des lis de l'API, ou, aussi l'id des li dans la todolist) :
    checkBox.id=el.id
    //On créer un event listner pour chaque li créée :
    checkBox.addEventListener('click',setTaskCompleted)
    const labelTitle=document.createElement('label')
    labelTitle.classList.add("ms-2", "form-check-label")
    const labelBin=document.createElement('label')
    labelBin.classList.add("ms-auto","btn","btn-danger", "btn-sm")
    labelBin.id=el.id
    labelBin.addEventListener('click',supprime)
    const bin=document.createElement('i')
    bin.classList.add("bi-trash")
   
    li.append(checkBox)
    li.append(labelTitle)
    li.append(labelBin)
    labelBin.append(bin)
    ul.append(li)
    labelTitle.innerHTML=el.title
    
    }
   
}
