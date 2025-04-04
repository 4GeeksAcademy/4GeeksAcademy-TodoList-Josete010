import React, { useState } from 'react'
import { Task } from './Task';
import { Form } from './Form';

function Todolist() {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    const handleChange = (e) => {
        setTarea(e.target.value)
    }

    const addTask = (e) => {
        e.preventDefault();
        if (tarea.trim() === '') {
            alert('Debes agregar algo')
            return;
        }

        const nuevaTarea = {
            id: Date.now(),
            tarea,
            completada: false
        }

        const totalTareas = [nuevaTarea, ... tareas]
        setTareas(totalTareas);
        setTarea('')
    }

    const quitarTarea = (id) => {
        const tareasActualizadas = tareas.filter(tarea => {
            return tarea.id !== id
        })
        setTareas(tareasActualizadas)
    }

    return (
        <>
            <h2>todos</h2>
            <Form
                handleChange = {handleChange}
                addTask={addTask}
                tarea = {tarea}
            />
            {tareas.length > 1 && (
                <button onClick={() => setTareas([])}>Vaciar tareas</button>
            )}
            {tareas.map(tarea => (
                <Task
                    key= {tarea.id}
                    id= {tarea.id}
                    tarea= {tarea}
                    quitarTarea= {quitarTarea}
                />
            ))}
        </>
    )
}

export default Todolist;
