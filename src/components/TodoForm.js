import { useState } from "react";
const { v4: uuidv4 } = require('uuid');




function TodoForm({addTodo}) {
   const [todo, setTodo] = useState({id:"",task:"",completed: false});

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id: uuidv4()});
            setTodo({...todo, task: ""});
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="task" type="text" value={todo.task} onChange={handleTaskInputChange}/>
            <button type="submit">Submit</button>
        </form>
    )

}

export default TodoForm;