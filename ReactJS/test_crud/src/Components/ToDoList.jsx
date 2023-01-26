import React from 'react'
import { useState } from 'react'

const ToDoList = () => {

    const [task, setTask] = useState({
        taskName: ""
    });
    const [taskStorage, setTaskStorage] = useState(
        [
            { 
                taskName: "Developer" 
            },
            {
                taskName: "tester"
            }
        ]
    )
    const[isEdit,setEdit] = useState(false);
    const[index,setIndex] = useState(null)

    const handleChange = (e)=>{
        var newTask = {...task};
        newTask[e.target.name] = e.target.value;
        setTask(newTask)
        // console.log(e);
    }
    const addClick = () =>{
        taskStorage.push(task);
        clearForm();
    }
    const clearForm =() =>{
        setTask({
            taskName:"",
        })
    }
    const editTask =(task,id)=>{
        setTask(task);
        setIndex(id);
        setEdit(true)
    }
    const updateClick =()=>{
        let update =[...taskStorage];
        update[index] = task;
        setTaskStorage(update)
        setEdit(false);
        clearForm();
    }
    const deleteTask = (task) =>{
        console.log(task)
        let result =taskStorage.filter((data)=> task.taskName !== data.taskName);
        setTaskStorage(result   ``)
    }
    return (
        <div>
            <div>
                <form action="">
                    <label htmlFor="">TaskName : </label>
                    <input type="text" name="taskName" value={task.taskName} onChange={(e)=>{handleChange(e)}}/> <br />
                    {isEdit ? <button type='button' onClick={()=>updateClick()}>Update Task</button>
                    :
                    <button type='button' onClick={()=>addClick()}>Add Task</button>}
                </form>
            </div>
            <div>
                <table style={{ border: "2px solid black" }}>
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskStorage.map((task,i)=>
                        <tr key={i}>
                            <td>{task.taskName}</td>
                            <td>
                                <button type='button' onClick={()=>editTask(task,i)}>Edit</button>
                            </td>
                            <td>
                                <button type='button' onClick={()=> deleteTask(task)}>Delete</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ToDoList
