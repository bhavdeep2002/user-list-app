import render from "./render.js"

function add(e){
    let name=document.getElementsByClassName('input')[0].value||null
    let email=document.getElementsByClassName('input')[1].value||null
    let age=document.getElementsByClassName('input')[2].value||0
    let gender=document.getElementsByClassName('input')[3].value

    let record={Name:name,Email:email,Age:age,Gender:gender}

    fetch('http://localhost/user-list-app/ajax/submit.php',
        {method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify(record)
    })
    .then((res)=>{
        // res object to js object promise
    return res.json()
    })
    .then((data)=>{
        if(data.error){
            console.log(data)
        }else
        render(data)
    })
    .catch((e)=>{
        console.log(e)
    })
}

export default add