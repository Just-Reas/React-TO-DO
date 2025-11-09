import AddField from "./AddField"
import Button from "./button"

const AddTask = (props) => {
    const{
        addTask,
        newTaskTitle,
        setNewTaskTitle,
    }= props

    return(
        <div className="todo-form__newtask" >
            <AddField
            className ="todo-form__newtask"
            label ="New Task"
            id= "new__task"
            value = {newTaskTitle}
            onInput = {(event) => setNewTaskTitle(event.target.value.length > 20 ? alert("Length should be < 20") : event.target.value)}
             />
            <Button className="field__button" type="button" addTask={addTask}>Add</Button>
        </div>
    )
}

export default AddTask