import render from "./render.js"
import form from "./form.js"

window.onload=function(){
    // creating form
    form()
    // creating table and getting data from server
    fetch('http://localhost/user-list-app/list.php')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        data.forEach((i)=>{render(i)})
    })
    .catch((e)=>{
        console.log(e)
    })
}



