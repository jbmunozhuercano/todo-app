import "./TodoForm.scss";

const TodoForm = (props) => {
    function sendForm(e) {
        e.preventDefault();
        props.setTask("");
        props.addNewTask(props.task);
    }

    return (
        <form onSubmit={sendForm}>
            <input
                type="text"
                onChange={(e) => props.setTask(e.target.value)}
                value={props.task}
            />
            <button>Add</button>
        </form>
    );
};

export default TodoForm;
