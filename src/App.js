import ToDoForm from "../src/components/TodoForm";
import ToDoList from "../src/components/TodoList";
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const [todos,setTodos] = useState([])

  const deleteTodo = (id) => {
   setTodos(todos.filter((todo,index) => index !== id))
    
   }
  


  return (
  <>
   <ToastContainer  />
   <ToDoForm setTodos={setTodos} todos={todos} />
   <ToDoList todos={todos}  deleteTodo={deleteTodo}/>
   
  </>
  )
     
  
}

export default App;
