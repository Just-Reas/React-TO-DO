const Button = (props) => {
    const {
        className = '',
        type = 'button',
        children,
        onClick,
        addTask,
    } = props
    return(
        <button className={className} type={type} onClick={addTask}> {children}</button>
    )
}

export default Button