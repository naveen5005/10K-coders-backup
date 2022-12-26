import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserForm from './UserForm'

const CreateUser = () => {
    const [user2, setUser2] = useState({
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
    const navigate = useNavigate();
    const handleChange = (e) => {
        // console.log(e);
        var newUser = { ...user2 };
        if (e.target.name === "areasofInterest") {
            var allcheckboxes = [...user2.areasofInterest];
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
        setUser2(newUser);
    }
    const addUser = () => {
        console.log(user2);
        fetch("http://localhost:3001/users2/", {
            method: 'POST',
            body: JSON.stringify(user2),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate("/");
        })
    }
    return (
        <div>
            {/* <h2>Welcome to create user page</h2> <br /> */}
            <UserForm user2={user2} handleChange={handleChange} handleButton = {addUser} btnName ={"Create User"}/>
        </div>
    )
}

export default CreateUser
