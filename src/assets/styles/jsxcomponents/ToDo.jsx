import { useState, useEffect, useMemo, useCallback} from 'react'


import AddTask from "./AddTask"
import SearchField from "./SearchField"
import ToDoBar from "./ToDoBar"
import ToDoList from "./ToDoList"

const ToDo = () => {

    const [tasks,setTasks] = useState( ()=>{
    try{
        const savedTasks = localStorage.getItem('tasks')

         if (savedTasks){
            return JSON.parse(savedTasks)
         }
         
         return[
            {id: 'task-1', title: 'Сойти с ума', isDone: true},
            {id: 'task-2', title: 'Погладить кота', isDone: false},
        ]
    }catch{
        console.log("local storage error")
    }
    })

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const [searchQuery, setSearchQuery] = useState('')

    const deleteAllTasks = useCallback(() => {
        const isConfirmed = confirm('Are you sure?')

        if (isConfirmed){
            setTasks([])
        }
    },[])

    const deleteTask = useCallback((taskId) => {
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
    }, [tasks])

    const toggleTaskComplete = useCallback((taskId, isDone) =>{
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId){
                    return {...task, isDone}
                }
                return task
            }
            )
        )
    }, [tasks])


    const addTask = () =>{
        if(newTaskTitle.trim().length > 0){
            const newTask ={
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false,
            }

            setTasks(prev => ([...prev, newTask]))
            setNewTaskTitle('')
        }
    }
    
    useEffect(() =>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])

    const clearSearchQuery= searchQuery.trim().toLowerCase()
    const filteredTasks = useMemo(() =>{
        (clearSearchQuery.length > 0)
    ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
    : null
    },[tasks,searchQuery])

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