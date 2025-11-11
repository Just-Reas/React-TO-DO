const ToDoBar = memo((props) => {
    const{
        total,
        done,
        onDeleteAllButtonClick,
     } = props

     const hasTasks = total > 0 
    return(
        <div className='todo-form__bartask'>
            <div className='todo-form__bartask__total'>Done {done} from {total}</div>

            {hasTasks &&(
                <button className='todo-form__bartask__button' onClick={onDeleteAllButtonClick}>Delete all</button>
            )}
        </div>
    )
})

export default ToDoBar