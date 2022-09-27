import React from 'react';
import { useState} from 'react';
import { toast } from 'react-toastify';




const ToDoForm = ({setTodos,todos}) => {

    const [todoValue,settodoValue] = useState('')
    
    
    const handleSubmit =  (e) => {
     if(todoValue ===''){
        toast.error('Please enter a todo!')
     } else if(todos.includes(todoValue)){
        toast.error('Todo already exists')

     } else if(todoValue.length < 3) {
      toast.error('Todo must be at least 3 characters long!')
     }else {
          const newTodo = todoValue.trim()
        setTodos([...todos, newTodo])
        toast.success('Todo Added!')
     }


        
    }

  return (
    <form action='' id='todo-form'>
        <input 
        type="text" 
        id='form-input'
        placeholder='Please Enter Your Todo.' 
        onChange={(e) => settodoValue(e.target.value)}
        value={todoValue}
        />
      <button onClick={(e) => {
        e.preventDefault()
         handleSubmit()
         settodoValue('')
        
     }} >
        <i className="fa-solid fa-plus"></i>
     </button>
    </form>
  );
};

export default ToDoForm;