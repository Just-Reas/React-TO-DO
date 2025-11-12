import { memo } from "react"
import TaskItem from "../taskitem/TaskItem"

const ToDoList = (props) => {
    const{
        tasks = [],
        onDeleteOneClick,
        onTaskCompleteChange,
        filteredTasks,
    }=props


    const hasTasks = tasks.length > 0

    const isEmptyFilteredTasks = filteredTasks?.length === 0

    if (!hasTasks){
        return <div className="todo-form__empty"> No tasks yet</div>
    }

    if (hasTasks && isEmptyFilteredTasks){
        return <div className="todo-form__empty"> Tasks not found</div>
    }

    return (
        <div className="todo-form__tasklist">
            <ul className="todo-form__tasklist__menu">
                {(filteredTasks ?? tasks).map((task) => 
                <TaskItem
                className={task.id}
                id={task.id}
                title={task.title}
                isDone={task.isDone}
                onDeleteOneClick ={onDeleteOneClick}
                key={task.id} 
                onTaskCompleteChange = {onTaskCompleteChange}
                />)}
            </ul>
        </div>
    )
}

export default ToDoList