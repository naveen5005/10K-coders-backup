import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserForm from './UserForm'

const DeleteUser = () => {
    const params = useParams();
    const navigate = useNavigate();
    // console.log(params)
    var [users2, setUsers2] = useState({
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
    const deleteUser = () => {
        fetch("http://localhost:3001/users/"+params.id,{
            method : "delete"
        }).then(()=>{
            navigate("/");
        })
    }
    useEffect(() => {
        fetch("http://localhost:3001/users/" + params.id).then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setUsers2(data);
            })
    }, [])
    return (
        <div>
            <UserForm users2={users2} handleChange = {handleChange} handleButton ={deleteUser} btnName={"Delete User"}/>
        </div>
    )
}

export default DeleteUser
