const TaskItem = (props) => {
  const {
    className = "",
    id,
    title,
    isDone,
    onDeleteOneClick,
    onTaskCompleteChange,
  } = props;

  return (
    <li className={"taskLi ${className}"}>
      <div className="taskLi__group">
        <label className="task-checkbox__container" htmlFor={id}>
          <input
            className="task-checkbox"
            type="checkbox"
            id={id}
            checked={isDone}
            onChange={({ target }) => onTaskCompleteChange(id, target.checked)}
          />
          <span className="checkbox-custom"></span>
        </label>
        {title}
      </div>

      <button className="taskLi__button" onClick={() => onDeleteOneClick(id)}>
        <svg
          className="taskLi__button__svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1L1 11M1 1L11 11"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
};

export default TaskItem;
