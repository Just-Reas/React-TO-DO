import {forwardRef} from "react"

const AddField = forwardRef((props, ref) => {
    const{
        className = '',
        id,
        label,
        type = 'text',
        onInput,
        value,
    } = props
    return(
        <div className={'field ${className}'}>
            <label className="field__label" htmlFor={id}></label>
            <input className="field__input" id={id} placeholder={label} autoComplete='off' type={type} onInput={onInput} ref={ref} value={value}/>
        </div>
    )
})

export default AddField