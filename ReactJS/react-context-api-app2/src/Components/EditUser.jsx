import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from './UserForm'

const EditUser = () => {
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
    useEffect(()=>{
        fetch("http://localhost:3001/users/"+params.id).then((resolve)=>resolve.json())
        .then((data)=>{
            setUsers2(data);
        })
    },[])
    const EditUser =()=>{
        fetch("http://localhost:3001/users/"+params.id,{
            method : 'put',
            body : JSON.stringify(users2),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(()=>{
            navigate("/");
        })
    }
    return (
        <div>
            <h2>Welcome to Edit component</h2>
            <UserForm users2={users2} handleChange={handleChange} handleButton={EditUser} btnName={"Update User"} />
        </div>
    )
}

export default EditUser
