
//function for getting items from local storage

let getItems = function(){
    let items = localStorage.getItem('Todos')
    return items
}


//funtion for adding todo to local storage

let addTodo = function (Todos){
        let id = uuidv4()
        addText = document.querySelector('#search-input').value
        
        var unkonown = "unamed todo"
        Todos.push({id:id,title:addText || unkonown,completed:false})
        stringTodo = JSON.stringify(Todos)
        localStorage.setItem('Todos',stringTodo)
      
        newRender(unkonown)
        
        //location.assign(`edit.html#${id}`)
}


let deleteTodo = function(id){
    
    listTodo = getItems()
    let parsedTodos = []
    parsedTodos = JSON.parse(listTodo)

    const index = parsedTodos.findIndex((ele)=>{
        return ele.id == id
    })
    parsedTodos.splice(index,1)
    let stringTodos = JSON.stringify(parsedTodos)
    localStorage.setItem('Todos',stringTodos)
    
    
    newRender()
    
  
}


let toggleTodo = function(Todos,uuid /* unique ID*/,checked){
    Todos = getItems()
    let mparsedTodos = []
    mparsedTodos = JSON.parse(Todos)
    //console.log("before:" + mparsedTodos)
    
    let index = mparsedTodos.findIndex((ele)=>{   //getting the index of Todo with id 

        return ele.id == uuid
    })

    console.log(mparsedTodos[index].id)
    
  //below code will update the specific Todo with completed status. Splice will do the thing
    mparsedTodos.splice(index,1,{id:mparsedTodos[index].id,title:mparsedTodos[index].title,completed:checked})

    //sending the updated array back to localStorge
    let StringTODOS = JSON.stringify(mparsedTodos)
    localStorage.setItem('Todos',StringTODOS)
    newRender()
  
}


