    import { memo, useCallback, useRef } from "react"
    import AddField from "../field/AddField"
    import Button from "../button/button"

    const AddTask = memo((props) => {
        const{
            addTask,
        }= props

        const ref = useRef(null)
        return(
            <div className="todo-form__newtask" >
                <AddField
                className ="todo-form__newtask"
                label ="New Task"
                id= "new__task"
                ref = {ref}
                />
                <Button className="field__button" type="button" addTask={() => {addTask(ref.current.value)}}>Add</Button>
            </div>
        )
    })

    export default AddTask