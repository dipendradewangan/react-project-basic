import DeletePermission from "./DeletePermission"

const DynamicModel = () => {
  return (
    <div className=" w-full border-2 h-screen absolute bg-red-500 z-1000 flex justify-center items-center" style={{backgroundColor : 'rgba(0,0,0,0.9)'}} >
        <div>
            <DeletePermission/>
        </div>
    </div>
  )
}

export default DynamicModel
