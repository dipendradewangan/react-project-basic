import { useContext, useState } from "react"
import { TaskDataContext } from "../ContaxtApi/TaskContext"

const TodoHeader = () => {
    const TaskData = useContext(TaskDataContext)
    console.log(TaskData)

    const [task, setTask] = useState(TaskData)


    const [input, setInput] = useState('')


    const inputHandler = (e) => {
        setInput(e.target.value)
       
    }


    const submitHandler = ()=>{
        TaskData.push({task : input, state: "normal"})
        setInput('')
    }
    return (
        <div className="flex gap-5">
            <input onChange={(e)=>inputHandler(e)} value={input} type="text" className="w-full p-5  outline-0 border-2 border-amber-50 rounded-2xl"  />
            <button onClick={submitHandler} className="bg-amber-50 text-gray-900 flex min-w-fit p-5 rounded-2xl font-bold text-xl">Add Task</button>

        </div>
    )
}

export default TodoHeader