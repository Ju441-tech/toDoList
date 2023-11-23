import { fetchApi } from "./functions/fetchApi.js";
import{createLi}from'./components/task.js'
import { TodoList } from "./components/TodoList.js";

const todo = await fetchApi()

const list=  new TodoList(todo)
console.log(list.list)
//list.todoList="hello"
console.log(list.todoList)

//on créer les lis pour le premier affichage :
createLi(list.todoList)

//On créer un event listner sur les boutons qui appelle, au click, la fonction filterTasks, celle ci sera paramétrée pour connaitre sur quel bouton on a cliqué grâce à e.currentTarget
const butFilter=document.querySelectorAll('button')
butFilter.forEach(button=>button.addEventListener('click',filterTasks))


function filterTasks(e){
  
    const ul=document.querySelector('ul')
    ul.innerHTML=""
    butFilter.forEach(button=>button.classList.remove('active'))
    e.currentTarget.classList.add('active')
    //si on click sur le bouton "Faites", on filtre la liste des todo, on ne garde que les completed=true, et on construit des lis en fonction de cette nouvelle liste"
    if(e.currentTarget.innerHTML==="Faites"){
      const newTodo =list.todoList.filter(el=>el.completed===true)
        createLi(newTodo)
    }//si on click sur le bouton "A faire", on filtre la liste des todo, on ne garde que les completed=false, et on construit des lis en fonction de cette nouvelle liste"
    else if(e.currentTarget.innerHTML==="A faire"){
        const newTodo =list.todoList.filter(el=>el.completed===false)
        createLi(newTodo) 
        //Si on clique sur le bouton "toutes", on ne change pas l'objet todo, et on reconstruit les lis en fonction de l'objet todo
    }else if(e.currentTarget.innerHTML==="Toutes") {
        
        createLi(list.todoList)
    }     
    }

    export function supprime(e){
        //console.log(e.currentTarget.id)
        const ul = document.querySelector('ul')
        list.todoList =list.todoList.filter(el=>el.id != e.currentTarget.id)
        ul.innerHTML=""
        createLi(list.todoList)
        
       
        
    }
   
 
  
    
   

