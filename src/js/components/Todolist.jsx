import React, {useState} from 'react'
import { Task } from './Task';
import { Form } from './Form';

function Todolist() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const addTask = (e) => {
        e.preventDefault();
        if(task.trim() === ''){
            alert('Debes agregar algo')
        return;
        }

        const newTask = {
            id: Date.now(),
            task, 
            completed: false
        }

        const totalTasks = [newTask, tasks]
        setTasks(totalTasks);
        setTask('')
    }

    const deleteTask = (id) => {
        const currentTasks = tasks.filter(task => {
            return task.id !== id
        })
        setTasks(currentTasks)
    }

    return (
        <>
        <h2>todos</h2>
        <Form 
         handleChange = {handleChange}
         addTask = {addTask}
         task = {task}
        />
        {tasks.length > 1 && (
            <button onClick={() => setTasks([])}>Empty tasks</button>
        )}
        {tasks.map(task => (
        <Task 
          key = {task.id}
          id = {task.id}
          task = {task}
          deleteTask = {deleteTask}
        />
    ))}
        </>
    )
}

export default Todolist;