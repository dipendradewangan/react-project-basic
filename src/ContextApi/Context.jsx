import { createContext, useState } from "react"

export const TaskDataContext = createContext()


const Context = (props) => {

    const [tasks, setTasks] = useState([])

    return (
        <div>
            <TaskDataContext.Provider value={{tasks, setTasks}}>
                {props.children}
            </TaskDataContext.Provider>
        </div>
    )
}

export default Context
