function editer(e,id){
    
    let name=prompt('Edit Name')
    let email=prompt('Edit Email')
    let age=parseInt(prompt('Edit age'))
    let gender=prompt('gender')

    let record={id:id,Name:name,Email:email,Age:age,Gender:gender}

    fetch('http://localhost/user-list-app/ajax/edit.php',
        {method:'PUT',headers:{'Content-Type':'application/json'},
        body:JSON.stringify(record)
    })
    .then((res)=>{
        // res object to js object promise
    return res.json()
    })
    .then((data)=>{
        console.log(data)
        if(data.error){
            console.log(data)
        }else
       {
        let gender=e.target.parentElement.previousSibling
        gender.innerText=data.gender
        
        let age=gender.previousSibling
        age.innerText=data.age

        let email=age.previousSibling
        email.innerText=data.email

        let name=email.previousSibling
        name.innerText=data.name

       }
    })
    .catch((e)=>{
        console.log(e)
    })
}

export default editer