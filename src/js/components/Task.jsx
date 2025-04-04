import React, { useState }  from 'react';


const Task = ({tarea, quitarTarea}) => {
    
    const [completada, setCompletada] = useState(false)

    return (
        <div className={completada ? 'containerTarea containerTareaCompletada' : 'containerTarea'}>
            <h2 className={completada ? 'completada' : 'noCompletada'}>{tarea.tarea}</h2>
            <button id='completar' onClick={() => setCompletada(!completada)}>{completada ? 'No completada' : 'Completada'}</button>
            <button onClick={() => quitarTarea(tarea.id)} id='eliminar'>Eliminar</button>
        </div>
    )
}

export {Task};