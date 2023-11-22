import { fetchApi } from "./functions/fetchApi.js";
import{createLi}from'./components/task.js'

const todo = await fetchApi()

//on créer les lis pour le premier affichage :
createLi(todo)

//On créer un event listner sur les boutons qui appelle, au click, la fonction filterTasks, celle ci sera paramétrée pour connaitre sur quel bouton on a cliqué grâce à e.currentTarget
const butFilter=document.querySelectorAll('button')
butFilter.forEach(button=>button.addEventListener('click',filterTasks))

function filterTasks(e){
    const ul=document.querySelector('ul')
    ul.innerHTML=""
    
    //si on click sur le bouton "Faites", on filtre la liste des todo, on ne garde que les completed=true, et on construit des lis en fonction de cette nouvelle liste"
    if(e.currentTarget.innerHTML==="Faites"){
      const newTodo =todo.filter(el=>el.completed===true)
        createLi(newTodo)
    }//si on click sur le bouton "A faire", on filtre la liste des todo, on ne garde que les completed=false, et on construit des lis en fonction de cette nouvelle liste"
    else if(e.currentTarget.innerHTML==="A faire"){
        const newTodo =todo.filter(el=>el.completed===false)
        createLi(newTodo) 
        //Si on clique sur le bouton "toutes", on ne change pas l'objet todo, et on reconstruit les lis en fonction de l'objet todo
    }else{
        createLi(todo)
    }     
    }
   
 
  
    
   

