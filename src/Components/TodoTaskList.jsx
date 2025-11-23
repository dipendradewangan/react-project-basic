import React, { useContext } from 'react'
import { TaskDataContext } from '../ContaxtApi/TaskContext'

const TodoTaskList = () => {
    const task =  useContext(TaskDataContext)
    console.log(task)
  return (
    <div>
      hello
    </div>
  )
}

export default TodoTaskList