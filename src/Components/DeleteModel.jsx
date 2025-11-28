import { X } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { TaskDataContext } from '../ContextApi/Context'

const DeleteModel = () => {

    const { setModelStatus, modelType, setModelType, tasks, setTasks, updateTaskIndex, setUpdateTaskIndex } = useContext(TaskDataContext)


    const handleDelete = () => {

        if(updateTaskIndex !== null ){
            const newArr = [...tasks]
            const updatedArr = newArr.filter((item) => item !== newArr[updateTaskIndex])
            setTasks(updatedArr)
            setUpdateTaskIndex(null)
        }

    }




    return (
        <div className='w-[300px] border-0 border-yellow-100 bg-gray-700 rounded-lg'>
            <div className='flex justify-end px-3 py-2'>
                <button onClick={() => (setModelStatus('Close'), setModelType(''))} className='bg-red-600 p-1 rounded cursor-pointer hover:bg-red-700 font-semibold text-yellow-300'><X size={15} /></button>
            </div>
            <div className='flex justify-center px-3 py-6 border-t border-gray-800 '>
                <h1 className='font-medium text-yellow-100'>Are You Sure To Delete...!</h1>
            </div>
            <div className='flex gap-2 justify-center px-3 py-2 border-t border-gray-800 text-black'>
                <button onClick={() => (setModelStatus('Close'), setModelType(''), handleDelete())} className='bg-red-600 px-3 font-semibold text-blue-950 rounded cursor-pointer hover:bg-red-500'>Delete</button>
                <button onClick={() => (setModelStatus('Close'), setModelType(''))} className='bg-green-600 px-3 font-semibold text-blue-950 rounded cursor-pointer hover:bg-green-500'>Cancel</button>
            </div>
        </div>
    )
}

export default DeleteModel
