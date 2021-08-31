import React,{ useState } from 'react'


const ToDoForm=(props)=> {
    const [input, setInput] = useState("")
    
    
    const handleChange=(event)=>{
        setInput(event.target.value)
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault()

    props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: input
        })
    setInput("")
    }
    return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <input placeholder="add a todo" value={input} name="text" className="todo-input" onChange={handleChange}></input>  
        <button className="todo-btn">Add ToDo</button>
     </form>
    )
}

export default ToDoForm
