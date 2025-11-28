import { createContext, useEffect, useState } from "react"

export const TaskDataContext = createContext()


const Context = (props) => {

    useEffect(()=>{

        if(localStorage.getItem("todoTasks")){
            setTasks(JSON.parse(localStorage.getItem("todoTasks")))
        }
        // setTasks(JSON.parse(localStorage.getItem("todoTasks")))
       
    }, [])

    const [tasks, setTasks] = useState([])
    const [modelStatus, setModelStatus] = useState('Close')
    const [modelType, setModelType] = useState("")
    const [updateTaskIndex, setUpdateTaskIndex] = useState(null)

    useEffect(()=>{
        localStorage.setItem("todoTasks", (JSON.stringify(tasks)))
    },[tasks])


    return (
        <div>
            <TaskDataContext.Provider value={{tasks, setTasks, modelStatus, setModelStatus, modelType, setModelType, updateTaskIndex, setUpdateTaskIndex}}>
                {props.children}
            </TaskDataContext.Provider>
        </div>
    )
}

export default Context
