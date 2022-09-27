import React from 'react'
import { toast } from 'react-toastify'

const TodoItem = ({todo, deleteTodo, id}) => {










    
   return (
    <div  className='todo-item'>
    <p>{todo}</p>
    <i className="fa-solid fa-circle-xmark" onClick={() =>{ 
    deleteTodo(id)
    toast.error('To do deleted!')
    }}></i>
</div>
  
  
    )
}

export default TodoItem