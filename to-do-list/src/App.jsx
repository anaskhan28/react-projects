import React, {useState, useEffect} from "react"
import './App.css'

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
      <h1 className="title">Awesome TodoList 2X Productivity</h1>
      <form className="form" onSubmit={addItem}>
      <input className="input" type="text" placeholder="write a todo" value={task} onChange={e=>{
        setTask(e.target.value)
      }} />
      <button className=" button submit" type="submit">Add item</button>
      </form>
      <ul className="list">
        {todos.map((todo,index)=>{
          return <div> 
            <li className="sublist">{todo}</li>
            <button className="button delete" onClick={()=>deleteItem(index)} >Delete</button>
          </div>
        })}
      </ul>
    </div>
  )
}

export default App
