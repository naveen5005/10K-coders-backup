import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import UserForm from './UserForm';
function CreateUser() {
    const[user1,setUser1] = useState({
        fname : "",
        lname :"",
        dob : "",
        email :"",
        phnum : ""
    })
    const navigate = useNavigate();
    const handleChange =(e)=>{
        var newUser ={...user1};
        newUser[e.target.name] = e.target.value;
        setUser1(newUser)
    }
    const addUser =()=>{
        console.log(user1);
        fetch("http://localhost:3001/users1",{
            method : 'POST',
            body : JSON.stringify(user1),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(()=>{
            console.log("User Added...!!!");
            navigate('/');
            clearForm();
        })
    }
    const clearForm =()=>{
        var userToBeCleared = {
            fname : "",
            lname :"",
            dob : "",
            email :"",
            phnum : ""
        }
        setUser1(userToBeCleared);
    }
    return (
        <div>
            {/* <h2>Welcome to create User Page</h2> */}
            <UserForm  handleChange = {handleChange} user1 ={user1} handleSubmit = {addUser} btnName = {"Add User"}/>
        </div>
    )
}

export default CreateUser
