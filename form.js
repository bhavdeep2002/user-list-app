import add from "./add.js"

function form(){
    // an array for form label and input's placeholder
    let form_list=[{label:"Name",placeholder:"Enter name"},{label:"Email",placeholder:"Enter email"},{label:"Age",placeholder:"Enter age"}]

// an array for form's gender select bar's label and option values      
let gender=[{label:"Gender",value:"Select Gender",gen1:"Male",gen2:"Female"}]

// an variable to get form element
let form= document.getElementById("form")

//now we have to create label and input for our form from form_list array
form_list.forEach((i,index)=>{
    
    // creating label and assigning its inner text from form_list's object's property
   let label= document.createElement("label")
    label.innerText=i.label
    // creating line breaks as required
   let br1= document.createElement("br")
   let br2= document.createElement("br")

   // creating input element and assigning placeholder and its class name
   let input =document.createElement("input")
    input.placeholder=i.placeholder
    input.className="input"

    // appending label then line break1 then input then line break2
    form.append(label)
    form.append(br1)
    form.append(input)
    form.append(br2)
})


// gender's select bar has to be created using gender array
// here each element is an js object with key-value pairs
gender.forEach((i)=>{
    
    //creating label element and assigning its inner text
    let label=document.createElement("label")
    label.innerText=i.label

    //creating line break
    let br=document.createElement("br")

    //creating select element and its option elements
    let select=document.createElement('select')
    let option1=document.createElement('option')
    let option2=document.createElement('option')
    let option3=document.createElement('option')

    // now assigning options to there values
    option1.innerText=i.value
    option2.innerText=i.gen1
    option3.innerText=i.gen2

    // now giving select element class name
    select.className="input"

    // now appending options into select element
    select.append(option1)
    select.append(option2)
    select.append(option3)

    //now appending label into form then line break then select
    form.append(label)
    form.append(br)
    form.append(select)
})

// now creating button element and assigning its classname and innertext
let button =document.createElement('button')
button.innerText='Submit'
button.className='my_btn'

// adding an eventlistener to button element on click
// it has an event object which we pass to add() function and preventDefault prevent's page from referesh 
button.addEventListener('click',(e)=>{e.preventDefault() 
    add(e)})

// now appending it into form    
form.append(button)
}

export default form

