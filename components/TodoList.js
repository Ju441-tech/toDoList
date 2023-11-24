export class TodoList{
    constructor(todo){
        this.list=todo
    }
   
    
    get todoList(){
        return this.list
    }
     //créer un setteur pour modifier le todo
    set todoList(newList){
        this.list=newList
    }
 
}
