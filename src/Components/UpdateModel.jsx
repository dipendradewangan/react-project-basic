import { X } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { TaskDataContext } from '../ContextApi/Context'
import { Category, getTaskStatusColor } from '../JsonData/Categories'

const UpdateModel = () => {

    const { tasks, setTasks, setModelStatus, modelType, setModelType, updateTaskIndex, setUpdateTaskIndex, setFilters } = useContext(TaskDataContext)

    const [updateInput, setUpdateInput] = useState('')

    const [updateTask, setUpdateTask] = useState(tasks[updateTaskIndex])

    const [status, setStatus] = useState(tasks[updateTaskIndex].status)

    // const [tempUpdateTask, setTempUpdateTask] = useState([...updateTask])


    const handleCategory = (e) => {
        const newObj = { ...updateTask }
        newObj.category = e.target.value

        setUpdateTask(newObj)
    }



    const handlePriority = (e) => {
        const newObj = { ...updateTask }
        newObj.priority = e.target.value
        setUpdateTask(newObj)

    }


    const handleSubmit = () => {
        const newTaskArray = [...tasks]

        newTaskArray[updateTaskIndex].taskName = updateInput
        newTaskArray[updateTaskIndex].priority = updateTask.priority
        newTaskArray[updateTaskIndex].category = updateTask.category
        newTaskArray[updateTaskIndex].status = status

        setTasks(newTaskArray)
        setFilters({
            status: [],
            category: [],
            priority: []
        })

    }


    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    useEffect(() => {

        if (modelType === 'Update') {
            setUpdateInput(updateTask.taskName)

        }


    }, [modelType])

    return (
        <div className='w-[80vw] border-0  bg-gray-700 rounded-lg flex flex-col'>
            <div className='w-full  px-3 py-2 flex justify-end'>
                <button onClick={() => (setModelStatus('Close'), setModelType(''))} className='bg-red-600 p-1 rounded cursor-pointer hover:bg-red-700 font-semibold text-yellow-300'><X size={15} /></button>
            </div>

            <div className='w-full border-t border-gray-900 px-3 py-2 flex flex-col gap-3'>
                <div className='flex items-center gap-2'>

                    <input id='updateTaskInput' type="text" value={updateInput} onChange={(e) => setUpdateInput(e.target.value)} className='bg-gray-600 w-full rounded p-2 outline-none border border-gray-800' />
                    <div>
                        <select value={status} onChange={(e) => {
                            handleStatus(e)
                        }} className='p-2 border border-gray-950 outline-none rounded' style={{ backgroundColor: getTaskStatusColor(status).color, color: getTaskStatusColor(status).textColor }} >
                            {
                                Category.workStatusCategory.map((ws, i) => <option key={ws.id} value={ws.name} style={{ backgroundColor: ws.color, color: ws.textColor }}>{ws.emoji} {ws.name}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-y--2 items-start'>

                    <h1 className='text-lg m-0 p-0 text-gray-400 font-bold leading-5'>Our Task : </h1>
                    <p className='mt-0 pt-0 text-gray-500 leading-5'>{updateInput}</p>
                </div>


                <div className='flex justify-between flex-wrap gap-7'>



                    <div className='flex flex-col gap-1'>
                        <h1 className='font-semibold text-xl text-gray-400'>Set Category</h1>
                        <div>
                            <form name='category-form' className='flex gap-x-13 gap-y-3 flex-wrap'>
                                {
                                    Category.taskTypeCategories.map((tc, index) => (
                                        <div className='flex gap-2' key={index}>

                                            <input onChange={(e) => handleCategory(e)} type='radio' id={index} value={tc.name} name='priority' checked={updateTask.category === tc.name ? true : false} />
                                            <label htmlFor={index}>{tc.emoji}{tc.name}</label>
                                        </div>

                                    ))
                                }

                            </form>
                        </div>


                    </div>



                    <div>

                        <h1 className='font-semibold text-xl text-gray-400'>Set Priority</h1>
                        <div>
                            <form name='Priority-form' className='flex gap-x-13 gap-y-3 flex-wrap'>
                                {
                                    Category.priorityCategories.map((pc, index) => (

                                        <div className='flex gap-2' key={index}>

                                            <input onChange={(e) => handlePriority(e)} type='radio' id={index} value={pc.name} name='priority' checked={updateTask.priority === pc.name ? true : false} />
                                            <label htmlFor={index}>{pc.emoji} {pc.name}</label>
                                        </div>


                                    ))
                                }
                            </form>
                        </div>
                    </div>

                </div>

            </div>

            <div className='flex gap-2 justify-end px-3 py-2 border-t border-gray-800 text-black'>
                <button onClick={() => (setModelStatus('Close'), setModelType(''), handleSubmit())} className='bg-amber-600 px-3 font-semibold text-blue-950 rounded cursor-pointer hover:bg-red-500'>Update</button>
                <button onClick={() => (setModelStatus('Close'), setModelType(''))} className='bg-green-600 px-3 font-semibold text-blue-950 rounded cursor-pointer hover:bg-green-500'>Cancel</button>
            </div>
        </div>
    )
}

export default UpdateModel
