import AddTask from "./AddTask";
import SearchField from "./SearchField";
import ToDoBar from "./ToDoBar";
import ToDoList from "./ToDoList";
import { useTasks } from "../../hooks/use-tasks";
import { useSearch } from "../../hooks/use-search";

const ToDo = () => {
  const { tasks, addTask, toggleTaskComplete, deleteTask, deleteAllTasks } =
    useTasks();

  const { filteredTasks, searchQuery, setSearchQuery } = useSearch(tasks);

  return (
    <div className="container">
      <div className="todo">
        <h1 className="todo__title">To Do List</h1>

        <div className="todo-form">
          <AddTask addTask={addTask} />

          <SearchField
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <ToDoBar
            total={tasks.length}
            done={tasks.filter(({ isDone }) => isDone).length}
            onDeleteAllButtonClick={deleteAllTasks}
          />

          <ToDoList
            filteredTasks={filteredTasks}
            tasks={tasks}
            onDeleteOneClick={deleteTask}
            onTaskCompleteChange={toggleTaskComplete}
          />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
