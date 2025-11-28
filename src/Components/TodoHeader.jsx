import { useContext, useState } from "react"
import { TaskDataContext } from "../ContextApi/Context"


const TodoHeader = () => {

    const {tasks, setTasks} = useContext(TaskDataContext)
    const [input, setInput] = useState('')

    const submitHandler = ()=>{

        setTasks([...tasks, {taskName: input, status: 'Pending', category: 'General', priority: 'Low Priority'}])
        setInput('')

        document.querySelector("#task-input").focus()
        
    }

    return (
        <div className="flex gap-5">
            <input id="task-input" value={input} onChange={(e)=>setInput(e.target.value)} type="text" className="w-full p-5  outline-0 border-2 border-amber-50 rounded-2xl"  />
            <button onClick={submitHandler}  className="bg-amber-50 text-gray-900 flex min-w-fit p-5 rounded-2xl font-bold text-xl">Add Task</button>
        </div>
    )
}

export default TodoHeader