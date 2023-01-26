import React from 'react'
import { useState } from 'react'

const User = () => {

    const [task, setTask] = useState({
        taskName: ""
    })
    const [isEdit, setIsEdit] = useState(false)
    const [index,setIndex] = useState(null)
    const [taskStorage, settaskStorage] = useState(
        [
            {
                taskName: "Developer details"
            },
            {
                taskName: "Testing Details"
            }
        ]
    );


    const handleChange = (e) => {
        let newTask = { ...task };
        newTask[e.target.name] = e.target.value;
        setTask(newTask)
    }
    const updateTaks = () => {
        // console.log(task)
        let update =[...taskStorage]
        update[index] = task;
        settaskStorage(update)
        setIsEdit(false) 
        // console.log(index)
        // console.log(taskStorage)
    }
    const addTask = () => {
        console.log(task)
        let addtask = taskStorage.push(task)
        console.log(addtask)
        clearForm();
    }
    const editUser = (task, i) => {
        setTask(task);
        setIndex(i)
        setIsEdit(true);
        console.log(task)
    }
    const deleteUser = (user) => {
        let result = taskStorage.filter((task) => task.taskName !== user.taskName)
        settaskStorage(result)
    }
    console.log(taskStorage)
    const clearForm = () => {
        setTask({
            taskName: ""
        })
    }
    return (
        <div>
            <div className="form">
                <form action="">
                    <label htmlFor="">Task : </label>
                    <input type="text" name="taskName" value={task.taskName} onChange={(e) => handleChange(e)} /> <br />
                    {isEdit ?
                        <button type='button' onClick={() => { updateTaks() }}>update Task</button>
                        :
                        <button type='button' onClick={() => addTask()}>Add Task</button>}
                </form>
            </div>
            <div className="display">
                <table style={{ border: "2px solid black" }}>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskStorage.map((task, i) =>
                            <tr key={i}>
                                <td>{task.taskName}</td>
                                <td>
                                    <button type='button' onClick={() => editUser(task, i)}>Edit</button>
                                </td>
                                <td>
                                    <button type='button' onClick={() => deleteUser(task)}>Delete</button>
                                </td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User
