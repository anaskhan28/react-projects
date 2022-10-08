import React, {useState, useEffect} from "react"
let globalID= 0
function App() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])
  
  // function createTodo(e){
  //   e.preventDefault()
  //   setTodos(oldTodos =>{
  //     setTask('')
  //     return [...oldTodos, {todo: task,id:globalID++}]
  //   })
  // }
  function addItem(e){
    if(e){
      e.preventDefault();
      if(task=== ""){
        alert('Enter a task first')
      }else{
        setTodos([...todos,task])
        setTask('')
      }
    }else{
      setTodos([...todos])
    }
  }
  function deleteItem(index){
  //   setTodos(oldTodos=>oldTodos.filter(item=>item.id!==itemID))
  // 
        todos.splice(index,1)
        addItem();
}
  

  return (
    <div className="App">
      <h1>Best To Do App Ever</h1>
      <form onSubmit={addItem}>
      <input  type="text" placeholder="write a todo" value={task} onChange={e=>{
        setTask(e.target.value)
      }} />
      <button type="submit">Add item</button>
      </form>
      <ul>
        {todos.map((todo,index)=>{
          return <div> 
            <li >{todo}({index})</li>
            <button onClick={()=>deleteItem(index)} >Delete</button>
          </div>
        })}
      </ul>
    </div>
  )
}

export default App
