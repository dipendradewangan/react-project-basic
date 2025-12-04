import DynamicModel from "./Components/DynamicModel"
import TaskList from "./Pages/TaskList"
import Todo from "./Pages/Todo"
const App = () => {
  return (
    <div className="bg-gray-800 text-white w-full h-screen fixed">
      <DynamicModel/>
      <Todo/>
    </div>

    // <TaskList/>
  )
}

export default App
