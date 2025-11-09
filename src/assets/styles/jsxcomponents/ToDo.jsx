import { useState, useEffect} from 'react'


import AddTask from "./AddTask"
import SearchField from "./SearchField"
import ToDoBar from "./ToDoBar"
import ToDoList from "./ToDoList"

const ToDo = () => {

    const [tasks,setTasks] = useState( ()=>{
         const savedTasks = localStorage.getItem('tasks')

         if (savedTasks){
            return JSON.parse(savedTasks)
         }
         
         return[
            {id: 'task-1', title: 'Сойти с ума', isDone: true},
            {id: 'task-2', title: 'Погладить кота', isDone: false},
        ]
        
    })

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const [searchQuery, setSearchQuery] = useState('')

    const deleteAllTasks = () => {
        const isConfirmed = confirm('Are you sure?')

        if (isConfirmed){
            setTasks([])
        }
    }

    const deleteTask = (taskId) => {
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
    }

    const toggleTaskComplete = (taskId, isDone) =>{
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId){
                    return {...task, isDone}
                }
                return task
            }
            )
        )
    }


    const addTask = () =>{
        if(newTaskTitle.trim().length > 0){
            const newTask ={
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false,
            }

            setTasks([...tasks, newTask])
            setNewTaskTitle('')
        }
    }
    
    useEffect(() =>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])

    const clearSearchQuery= searchQuery.trim().toLowerCase()
    const filteredTasks = (clearSearchQuery.length > 0)
    ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
    : null

    return (
        <div className="container">
            <div className="todo">
                <h1 className='todo__title'>To Do List</h1>

                <div className='todo-form' >

                    <AddTask addTask={addTask} newTaskTitle={newTaskTitle} setNewTaskTitle={setNewTaskTitle}/>

                    <SearchField searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

                    <ToDoBar total={tasks.length} done={tasks.filter(({isDone}) => isDone).length}  onDeleteAllButtonClick={deleteAllTasks}/>

                    <ToDoList filteredTasks={filteredTasks} tasks={tasks} onDeleteOneClick={deleteTask} onTaskCompleteChange={toggleTaskComplete}/>
                </div>

            </div>
        </div>
    )
}

export default ToDo