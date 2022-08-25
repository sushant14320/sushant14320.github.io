
let dl_btn = []
let Todo = []
let addText;



let newRender = (unkonown)=> {
    //let items = localStorage.getItem('Todos')
    let items = getItems()

    
    if(items !== null){

        Todo = JSON.parse(items)
        
        document.querySelector('#notes-render').innerHTML = ''
        
        Todo.map((ele,index) => {
        const uuid = ele.id;
        //console.log(uuid)
        //creating  HTML elements
        let anchor = document.createElement('a')
        let div = document.createElement('div')
        let button = document.createElement('button')
        let npara = document.createElement('span')
        let checkbox = document.createElement('input')
        let br = document.createElement('br')

        anchor.setAttribute('href',`edit.html#${uuid}`)
        //adding css classes
        button.setAttribute('id','btn-delete')
        div.setAttribute('id','todo-div')
        npara.setAttribute('id','para')
        checkbox.setAttribute('id','check-btn')
       
        
       if(ele.completed === true){
        checkbox.checked = true
       }
       
        //setting custom attribute
       // button.setAttribute('data-field',uuid) //working
        button.setAttribute('index',uuid) //working
        checkbox.setAttribute('index',uuid)

       


        // button.addEventListener('click',function(){
        //     deleteTodo(uuid)
        // })

       // npara.innerHTML = `${ele.title}`
        anchor.innerHTML = `${ele.title}`
        button.textContent = 'X'
        checkbox.setAttribute('type','checkbox')
        document.querySelector('#notes-render').appendChild(div)

        //displaying HTML element under "div" 
        div.appendChild(br)
        div.appendChild(checkbox)
       // div.appendChild(npara)
        div.appendChild(anchor)
        div.appendChild(button)
        
    })
    }
    document.querySelectorAll('#btn-delete').forEach((el) => {
        el.addEventListener('click', function () {
          const uuid = el.getAttribute('index'); 
          deleteTodo(uuid); 
        });
      });


      document.querySelectorAll('#check-btn').forEach((el) => {
        el.addEventListener('change',function(e){
            let uuid = el.getAttribute('index');
            toggleTodo(Todo,uuid,e.target.checked)

        })
      })

    }
    newRender()
    
    
//delete function down here



//newrender


document.querySelector('#btnadd').addEventListener('click',(e)=>{
    addTodo(Todo)
})





// document.querySelector('#check').addEventListener('change', (e)=>{
// if(e.target.checked){
//     rendercheck(Todos)
// }
// else{
//     rendertodo(Todos)
// }

// })





    // dl_btn = document.querySelectorAll('#btn-delete')
    // console.log(dl_btn)
    // Array.from(dl_btn).map(el => {
    //     el.addEventListener('click',function(){
            
    //         console.log("button clicked")
            
    //         const uuid = el.getAttribute('index')
       
    //         //console.log("got uuid" + uuid)
            
    
    //        deleteTodo(uuid)
           
    //     })
    // })








// document.querySelectorAll('#btn-delete').forEach(el => el.addEventListener('click',function(e){
       
//     const uuid = el.getAttribute('index')
//     console.log(uuid)
//     deleteTodo(uuid)
    
    
// }

// ))


//down here



























// let filtered;


// let rendercheck = function(Todos){
//     filtered = Todos.filter((ele) => {
        
//         return ele.completed == false  
//     })
//     document.querySelector('#notes-render').innerHTML = ''

//     filtered.map((ele) => {
//         let para = document.createElement('p') 
//         para.textContent = ele.title
//         document.querySelector('#notes-render').appendChild(para)
//     })
// }

// document.querySelector('#check').addEventListener('change', (e)=>{
// if(e.target.checked){
//     rendercheck(Todos)
// }
// else{
//     rendertodo(Todos)
// }

// })



// let rendertodo = function(Todos,text=''){
//     filtered = Todos.filter((ele) => {
        
//         return ele.title.toLowerCase().includes(text.toLowerCase())   
//     })
//     document.querySelector('#notes-render').innerHTML = ''

//     filtered.map((ele) => {
//         let para = document.createElement('p') 
//         para.textContent = ele.title
//         document.querySelector('#notes-render').appendChild(para)
//     })
// }

// //rendertodo(Todos)




// let search = document.querySelector('#search-input').addEventListener('input', (e)=>{
//     console.log(e.target.value)
  
//     let text = e.target.value
//     rendertodo(Todos,text)

  
    
// })

























// let filteredArray  = Todos.filter((ele,index) => {
   
//     return ele.completed === false
// })

// let header2 = document.createElement('h2')
// header2.textContent = `you have ${filteredArray.length} todos left`
// document.querySelector('body').appendChild(header2)

// filteredArray.forEach((ele) => {
//     let para = document.createElement('p') //creating an element (paragraph element)
//     para.textContent = `${ele.title}` //assigning a value for that element (paragraph)
//     document.querySelector('body').appendChild(para) //appending the element in document
// })