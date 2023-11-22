import { fetchApi } from "./functions/fetchApi.js";


const todo = await fetchApi()
console.log(todo)
for (let el of todo){
    console.log(el.title)
}