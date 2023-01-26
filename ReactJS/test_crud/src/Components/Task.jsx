import React from 'react'
import { useState } from 'react'

const Task = () => {
    const[task,setTask] = useState({
        'taskName' : ""
    })
    const [taskStorage,setTaskStorage] = useState([
        { 
            taskName: "Developer" 
        },
        {
            taskName: "tester"
        }
    ])
    const[isEdit,setEdit] = useState(false);
    const[index,setIndex] = useState(null)
    const deleteTask =(task)=>{
        console.log(task);
        let result = taskStorage.filter((data)=> data.taskName !== task.taskName);
        console.log(result)
        setTaskStorage(result)
    }
    const addTask = () =>{
        console.log(task)
        taskStorage.push(task)

    }
    const handleChange = (e)=>{
        let newTask = {...task};
        newTask[e.target.name] = e.target.value;
        setTask(newTask);
    }
    const editTask = (data,i)=>{
        setTask(data);
        setIndex(i)
        setEdit(true)
    }
    const updateTask = ()=>{
        let update = [...taskStorage];
        console.log(index)
        update[index] = task;
        setTaskStorage(update)
    }
    console.log(taskStorage)
  return (
    <div>
      <div className="task-form">
        <form action="">
            <label htmlFor="">Task Name</label>
            <input type="text" name="taskName" value={task.taskName} onChange ={(e)=>{handleChange(e)}}/> <br />
            {isEdit ? <button type='button' onClick={()=>{updateTask()}}>Update Task</button>
            :
            <button type='button' onClick={()=>{addTask()}}>Add Task</button>}
        </form>
      </div>
      <div className="task-display">
        <table style={{border:"2px solid black"}}>
            <thead>
                <tr>
                    <th>Task Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {taskStorage.map((data,i)=>
                <tr key={i}>
                    <td>{data.taskName}</td>
                    <td>
                        <button type='button' onClick={()=>{editTask(data,i)}}>Edit</button>
                    </td>
                    <td>
                        <button type='button' onClick={()=>{deleteTask(data)}}>Delete</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Task
