import { useContext } from "react"
import { TaskDataContext } from "../ContextApi/Context"
import DeleteModel from "./DeleteModel"
import UpdateModel from "./UpdateModel"


const DynamicModel = (Modeltype) => {

  const { modelStatus, modelType, setModelType } = useContext(TaskDataContext)
  console.log(Modeltype)
  return (
    <div className={` w-full border-2 h-screen absolute bg-red-500 z-1000 ${modelStatus === 'Open' ? 'flex justify-center items-center' : 'hidden'} `} style={{ 'backgroundColor': 'rgba(0,0,0,0.9)' }} >
      <div>

         {/* <DeleteModel/>  */}
         <UpdateModel/> 
        {/* { modelType === 'Delete' ? <DeleteModel/> : ( modelType === 'Update' ? <UpdateModel/> : <DeleteModel/>)} */}

      </div>
    </div>
  )
}

export default DynamicModel
