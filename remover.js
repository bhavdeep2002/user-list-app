
function remover(e,id){

    fetch('http://localhost/user-list-app/ajax/delete.php',{method:'DELETE',headers:{'Content-Type':'application/json'}
    ,body:`{"id":${id}}`})
    .then((res)=>{
        return res.json()
    })
    .then((d)=>{
        e.target.closest('.row_container').remove()
    })
    .catch((e)=>{
        console.log(e)
    })
}

export default remover
