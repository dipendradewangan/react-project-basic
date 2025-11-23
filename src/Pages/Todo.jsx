import ControlPanel from "../Components/ControlPanel"
import TodoHeader from "../Components/TodoHeader"
import TodoTaskList from "../Components/TodoTaskList"

const Todo = () => {
    return (
        <div className="p-6 w-full border-2 border-white " >

            <ControlPanel/>
            <div>
                <h1 className="text-5xl text-center p-5 mb-12 text-amber-100">Todos</h1>
                <TodoHeader/>
                <TodoTaskList/>
            </div>
        </div>
    )
}

export default Todo

