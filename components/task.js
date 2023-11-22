

export function createLi(list){
    const ul=document.querySelector('ul')
    
    
    
    for(let el of list){
    const li=document.createElement('li')
    ul.append(li)
    li.innerHTML=el.title
    }

}