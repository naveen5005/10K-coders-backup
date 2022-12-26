import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserForm from './UserForm'

const CreateUser = () => {
    const [users2,setUsers2] = useState({
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        areasofInterest: [],
        avgCPI: "",
        experience: "",
        website: ""
    })
    const params = useParams();
    const navigate = useNavigate();
    const handleChange = (e) => {
        // console.log(e);
        var newUser = { ...users2 };
        if (e.target.name === "areasofInterest") {
            var allcheckboxes = [...users2.areasofInterest];
            if (allcheckboxes.length === 0) {
                allcheckboxes.push(e.target.value)
            } else {
                let check = allcheckboxes.find((ele) => ele == e.target.value)
                if (check) {
                    allcheckboxes = allcheckboxes.filter((ele) => ele !== e.target.value)
                } else {
                    allcheckboxes.push(e.target.value)
                }
            }
            newUser[e.target.name] = allcheckboxes
        } else {
            newUser[e.target.name] = e.target.value;
        }
        setUsers2(newUser);
    }

  const createUser = () =>{
    fetch("http://localhost:3001/users/",{
        method : "Post",
        body : JSON.stringify(users2),
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then(()=>{
        setUsers2(users2)
        navigate("/");
    })
  }
  return (
    <div>
      <h2>Welcome to create page</h2>
      <UserForm users2={users2} handleChange ={handleChange} handleButton ={createUser} btnName={"Create User"}/>
    </div>
  )
}

export default CreateUser
