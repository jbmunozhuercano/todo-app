import "./TodoItem.scss";

const ListItem = ({ tasksArray, removeTask }) => {
    return (
        <>
            {tasksArray.map((e, index) => (
                <li key={index}>
                    {e}
                    <span onClick={removeTask} data-name={e}>
                        &times;
                    </span>
                </li>
            ))}
        </>
    );
};

export default ListItem;
