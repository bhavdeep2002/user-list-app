import editer from "./editer.js"
import remover from "./remover.js"

function render(i){

    // creating a row_container div element and assigning it an class
    let row_container=document.createElement('div')
    row_container.className='row_container'

    // creating a row and giving it an class name
    let row =document.createElement('div')
    row.className='row'
    
    // creating a div element name and its inner text and class name as follows
    let name=document.createElement('div')
    name.innerText=i.name
    name.className='column'
    
    // creating a div element email and its inner text and class name as follows
    let email=document.createElement('div')
    email.className='email'
    email.innerText=i.email
    
    // creating a div element age and its inner text and class name as follows
    let age=document.createElement('div')
    age.className='column'
    age.innerText=i.age
    
    // creating a div element gender and its inner text and class name as follows
    let gender=document.createElement('div')
    gender.className='column'
    gender.innerText=i.gender
    
    // creating a div element action and its inner text and class name as follows
    let action =document.createElement('div')
    action.classList.add('column', 'action');

    let edit=document.createElement('a')
    edit.innerText='Edit'
    edit.onclick=(e)=>editer(e,i.id)

    let delet =document.createElement('a')
    delet.innerText='Delete'
    delet.onclick = (e) => remover(e,i.id);

    action.append(edit)
    let span=document.createElement('span')
    span.innerText='|'
    action.append(span);
    action.append(delet)


    row.append(name)
    row.append(email)
    row.append(age)
    row.append(gender)
    row.append(action)
    row_container.append(row)
    row_container.append(document.createElement('hr'))

   let table= document.getElementsByClassName('table')[0]
   table.append(row_container)
}

export default render