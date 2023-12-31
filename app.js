import { fetchApi } from "./functions/fetchApi.js";
import{createLi}from'./components/task.js'
import { TodoList } from "./components/TodoList.js";

const todo = await fetchApi()

const list=  new TodoList(todo)


//on créer les lis pour le premier affichage :
createLi(list.todoList)

//On créer un event listner sur les boutons qui appelle, au click, la fonction filterTasks, celle ci sera paramétrée pour connaitre sur quel bouton on a cliqué grâce à e.currentTarget
const butFilter=document.querySelectorAll('.btn-outline-primary')
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
    export function setTaskCompleted(e){
        console.log(e.currentTarget.id)
        //changer completed en true dans list.todoList grâce à e.currentTarget
        console.log(list.list)
        const elemlist=list.list
        const tag=elemlist.find((el)=>el.id==(e.currentTarget.id))
        console.log(tag)
        tag.completed=true//Ca ne marche pas, il faut créer une classe pour "setter" les propriétés des objets
        //Et une fois que les objets ont été settés, il faut faire un décochage automatique de la checkbox
        
    }
const form =document.querySelector('form')
form.addEventListener('submit',addTask)
    function addTask(e){
       e.preventDefault()
        const form=e.currentTarget
        const data=new FormData(form)     
        const newList=list.todoList
         //1-cherche le dernier indice de todo :
        const id= newList[newList.length-1].id
        //On ajoute une nouveau objet à la collection List :
        newList.push(
            {
                "userId": 1,
                "id": id+1,//2-puis mettre dernier indice de todo + 1
                "title": data.get("title"),
                "completed": false
            }
        )
        const input = document.querySelector('.form-control')
        input.value=""
      
    }
 
   
 
  
    
   

