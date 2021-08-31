import {RiCloseCircleLine} from "react-icons/ri"

function ToDo({todos, removeTodo}) {
    
    
    return todos.map((todo)=>(
        <div className="todolist">        
        <div className="todos">
        {todo.text}
        </div>
        <div className="icon">
        <RiCloseCircleLine onClick={()=> removeTodo(todo.id)} className="delete-icon"/>
        </div>
        </div>
    ))
}

export default ToDo
