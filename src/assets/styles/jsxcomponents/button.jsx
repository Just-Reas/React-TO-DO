import { Children } from "react"

const Button = (props) => {
    const {
        className = '',
        type = 'button',
        children,
        addTask,
    } = props
    return(
        <button className={className} type={type} onClick={addTask}> {children}</button>
    )
}

export default Button