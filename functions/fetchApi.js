export async function fetchApi(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    return resp.json()
}