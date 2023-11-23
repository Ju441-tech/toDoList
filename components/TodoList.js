export class TodoList{
    constructor(todo){
        this.list=todo
    }
    //créer un setteur pour modifier le todo
    
    get todoList(){
        return this.list
    }
    set todoList(newList){
        this.list=newList
    }
 
}
