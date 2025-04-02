import React, { useState }  from 'react';


const Task = ({task, deleteTask}) => {
    
    const [completed, setCompleted] = useState(false)

    return (
        <div className={completed ? 'containerTask containerTaskCompleted' : 'containerTask'}>
            <h2 className={completed ? 'completed' : 'noCompleted'}>{task.task}</h2>
            <button id='complete' onClick={() => setCompleted(!completed)}>{completed ? 'No completed' : 'Completed'}</button>
            <button onClick={() => deleteTask(task.id)} id='delete'>Delete</button>
        </div>
    )
}

export {Task};