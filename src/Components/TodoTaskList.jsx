
import { useContext } from 'react'
import { Category, getTaskStatusColor } from '../JsonData/Categories'
import { TaskDataContext } from '../ContextApi/Context'

const TodoTaskList = () => {

    const { tasks, setTasks } = useContext(TaskDataContext)
    console.log(tasks)


    const handleStatus = (e)=>{
        const tasksIndex = e.target.id
        const updatedTaskStatus = e.target.value

        let newArr = [...tasks]

        newArr[tasksIndex].status = updatedTaskStatus

        setTasks(newArr)

    }

    return (
        <div className='mt-6 flex flex-col gap-2'>

            {
                tasks.map((t, i) => (
                    <div className='border border-gray-200 rounded-xl px-3 py-2 flex justify-between items-center'>
                        <h1 className='flex flex-wrap'>{t.taskName}</h1>
                        <div>
                            <select value={t.status} id={i} onChange={(e)=>handleStatus(e)} style={{backgroundColor: getTaskStatusColor(t.status)}} className='border border-gray-600 px-1 py-1'>
                                {Category.workStatusCategory.map((item) => <option key={item.id} value={item.name} style={{ backgroundColor: item.color }}>{item.emoji} {item.name}</option>)}
                            </select>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default TodoTaskList