import { RiMenu4Line } from "@remixicon/react";
import { X } from 'lucide-react'
import { useContext, useEffect, useMemo, useState } from "react";
import { Category, getTaskDecorationValues } from "../JsonData/Categories";
import { TaskDataContext } from "../ContextApi/Context";

const ControlPanel = () => {

    const { tasks, filteredData, setFilteredData, filters, setFilters } = useContext(TaskDataContext)
    const [panelState, setPanelState] = useState('close')






    const statusOptions = tasks.map(item => ({
        status: item.status,
        emoji: getTaskDecorationValues("workStatusCategory", item.status).emoji
    })).filter((obj, index, self) => index === self.findIndex(t => t.status === obj.status));


    const priorityOptions = tasks.map(item => ({
        priority: item.priority,
        emoji: getTaskDecorationValues("priorityCategories", item.priority).emoji
    })).filter((obj, index, self) => index === self.findIndex(t => t.priority === obj.priority))

    const categoryOptions = tasks.map((item => ({
        category: item.category,
        emoji: getTaskDecorationValues("taskTypeCategories", item.category).emoji
    }))).filter((obj, index, self) => index === self.findIndex(t => t.category === obj.category))


    const handleCheckboxChange = (group, value) => {
        setFilters((prev) => {
            const exists = prev[group].includes(value);
            if (exists) {
                // remove
                return {
                    ...prev,
                    [group]: prev[group].filter(v => v !== value)
                };
            }
            // add
            return {
                ...prev,
                [group]: [...prev[group], value]
            };

        })
    }




    useEffect(() => {
        const nextFilters =  tasks.filter((item) => {
            const matchStatus = filters.status.length === 0 || filters.status.includes(item.status)
            const matchCategory = filters.category.length === 0 || filters.category.includes(item.category)
            const matchPriority = filters.priority.length === 0 || filters.priority.includes(item.priority)

            return matchStatus && matchCategory && matchPriority

        })

        setFilteredData(nextFilters)

    }, [filters])


    // const filterd = useMemo(() => {
    //     return tasks.filter((item) => {
    //         const matchStatus = filters.status.length === 0 || filters.status.includes(item.status)
    //         const matchCategory = filters.category.length === 0 || filters.category.includes(item.category)
    //         const matchPriority = filters.priority.length === 0 || filters.priority.includes(item.priority)

    //         return matchStatus && matchCategory && matchPriority

    //     })
    // }, [filters])

    // const abc = useMemo(() => {
    //     setFilteredData(tasks.filter((item) => {
    //         const matchStatus = filters.status.length === 0 || filters.status.includes(item.status)
    //         const matchCategory = filters.category.length === 0 || filters.category.includes(item.category)
    //         const matchPriority = filters.priority.length === 0 || filters.priority.includes(item.priority)

    //         return matchStatus && matchCategory && matchPriority

    //     }))
    // }, [filters])



    function myMenu() {
        if (panelState === 'close') {
            setPanelState('open')
        }
        else {
            setPanelState('close')
        }
    }

    function clearFilters() {
        setFilters({
            status: [],
            category: [],
            priority: []
        })
    }




    return (
        <div>
            <div className={`bg-gray-600 absolute ${panelState === 'open' ? "left-[0px]" : "left-[-250px]"}  top-0 w-[250px] h-screen`}>
                <div className="blank-space h-[70px]"></div>
                <div className="blank-space w-full flex flex-col gap-0.5  p-3">
                    <h1 className="text-2xl font-bold text-gray-400 py-3">Filter</h1>


                    <h5 className="font-bold pb-1">Work Status</h5>
                    {
                        statusOptions.map((item, index) => (
                            <label key={index} className="flex items-center gap-2"> <input id={`${item.status}-id-${index}`} type="checkbox" checked={filters.status.includes(item.status)} onChange={() => handleCheckboxChange("status", item.status)} /> {item.status} <span className="text-xs">{item.emoji}</span></label>
                        ))
                    }

                    <h5 className="font-bold pb-1 mt-3">Priority</h5>
                    {
                        priorityOptions.map((item, index) => (
                            <label key={index} className="flex items-center gap-2"> <input id={`${item.priority}-id-${index}`} type="checkbox" onChange={() => handleCheckboxChange("priority", item.priority)} /> {item.priority} <span className="text-xs">{item.emoji}</span></label>
                        ))
                    }


                    <h5 className="font-bold pb-1 mt-3">Category</h5>
                    {
                        categoryOptions.map((item, index) => (
                            <label key={index} className="flex items-center gap-2"> <input id={`${item.category}-id-${index}`} type="checkbox" onChange={() => handleCheckboxChange("category", item.category)} /> {item.category} <span className="text-xs">{item.emoji}</span></label>
                        ))
                    }



                    {
                        !(filters.status.length === 0 && filters.category.length === 0 && filters.priority.length === 0) && <button onClick={() => clearFilters()} className="w-[150px] border border-amber-200 mt-5 px-3 py-1.5 rounded-lg bg-amber-100 text-black font-bold cursor-pointer">Clear Filter</button>
                    }

                </div>
            </div>
            <button onClick={myMenu} className="flex gap-2 border border-gray-500 py-2 px-3 rounded-lg cursor-pointer active:scale-99 hover:bg-gray-600 absolute top-3 left-5 z-100"> {panelState === 'close' ? <RiMenu4Line /> : <X />}   Control Panel</button>
        </div>
    )
}

export default ControlPanel
