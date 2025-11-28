
import React, { useContext, useState } from 'react'
import { Category, getTaskStatusColor } from '../JsonData/Categories'
import { TaskDataContext } from '../ContextApi/Context'
import { RiDeleteBin2Line } from '@remixicon/react'
import { PencilOff } from 'lucide-react'

const TodoTaskList = () => {

    const { tasks, setTasks, setModelStatus, setModelType, updateTaskIndex, setUpdateTaskIndex } = useContext(TaskDataContext)




    const handleStatus = (e) => {
        const tasksIndex = e.target.id
        const updatedTaskStatus = e.target.value
        let newArr = [...tasks]
        newArr[tasksIndex].status = updatedTaskStatus
        setTasks(newArr)

    }

    const handleModel = (type) => {
        setModelStatus('Open')
        setModelType(type)
    }


    const handleDelete = (index) => {
        // ()=>handleModel('Delete')
        handleModel('Delete')
        setUpdateTaskIndex(index)
    }


    const handleUpdate = (index)=>{
        handleModel('Update')
        setUpdateTaskIndex(index)

    }




    return (
        <div className='mt-6 flex flex-col gap-2 max-h-max overflow-x-hidden'>

            {
                tasks.map((t, i) => (
                    <div key={i} className='border border-gray-200 rounded-xl px-3 py-2 flex justify-between items-center'>
                        <h1 className='flex flex-wrap'>{t.taskName}</h1>
                        <div className='flex gap-2'>
                            <select value={t.status} id={i} onChange={(e) => handleStatus(e)} style={{ backgroundColor: getTaskStatusColor(t.status).color, color: getTaskStatusColor(t.status).textColor  }} className='outline-none border border-gray-600 px-1 py-1 rounded-sm'>
                                {Category.workStatusCategory.map((item) => <option key={item.id} value={item.name} style={{ backgroundColor: item.color, color: item.textColor }}>{item.emoji} {item.name}</option>)}
                            </select>
                            <button onClick={() => handleDelete(i)} className='border border-gray-500 px-2  rounded-sm'>
                                < RiDeleteBin2Line size={18} />
                            </button>
                            <button onClick={() => handleUpdate(i)} className='border border-gray-500 px-2 rounded-sm'>
                                <PencilOff size={18} />
                            </button>


                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoTaskList