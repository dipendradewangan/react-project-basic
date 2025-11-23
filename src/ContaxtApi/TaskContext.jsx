import { createContext } from 'react'

export const TaskDataContext = createContext()

const TaskContext = (props) => {

    return (
        <div>
            <TaskDataContext.Provider value={[]}>
                {props.children}
            </TaskDataContext.Provider>
        </div>
    )
}

export default TaskContext