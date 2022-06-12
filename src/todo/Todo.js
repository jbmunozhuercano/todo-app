import { useState, useEffect } from "react";
import SaveTodo from "./SaveTodo";
import TodoForm from "./TodoForm";
import ListItem from "./TodoItem";

const Todo = () => {
    let [task, setTask] = useState("");
    let [tasks, addTask] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    const addNewTask = (newTask) => {
        addTask((tasks) => [...tasks, newTask]);
    };

    const removeTask = (event) => {
        const element = event.target.getAttribute("data-name");
        const newArray = tasks.filter((item) => item !== element);
        console.log(element);
        addTask(newArray);
    };

    const saveTasks = (e) => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    return (
        <div>
            <SaveTodo saveTasks={saveTasks} />
            <TodoForm task={task} setTask={setTask} addNewTask={addNewTask} />
            {tasks.length > 0 && (
                <ul className="list--block">
                    <ListItem tasksArray={tasks} removeTask={removeTask} />
                </ul>
            )}
        </div>
    );
};

export default Todo;
