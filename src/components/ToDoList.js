import React, {useState} from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'



function ToDoList() {
    const [todos, setTodos]= useState([])    
    
    const addTodo=(todo)=>{
        const newTodos=[todo, ...todos]
        setTodos(newTodos)
    }
    
    const removeTodo=(id)=>{
         const removeArr=[...todos].filter(todo => todo.id !== id)
         setTodos(removeArr)
    }
    return (
        <div className="container">
            <h1 className="title">Todo's</h1>
            <ToDoForm onSubmit={addTodo}/>
            <ToDo todos={todos} removeTodo={removeTodo}/>
        </div>
    )
}

export default ToDoList
