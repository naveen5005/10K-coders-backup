import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserForm from './UserForm';

const CreateUser = () => {
  const navigate = useNavigate();
  const[user3,setUser3] =useState({
    uname :"",
    pwd : "",
    email : "",
    presentGender : "",
    interestedGender :"",
    year : "",
    month :"",
    date :""
  })
  const handleChange=(e)=>{
    var newUser ={...user3};
    newUser[e.target.name] = e.target.value;
    setUser3(newUser);
  }
  const createUser=()=>{
    console.log(user3);
    fetch("http://localhost:3001/users3",{
      method : 'post',
      body : JSON.stringify(user3),
      headers :{
        'Content-Type' : 'application/json'
      }
    }).then(()=>{
      navigate("/");
    })
  }
  return (
    <div>
      {/* <h2>Welcome to create user page</h2> */}
      <UserForm user3={user3} handleChange={handleChange} handleButton = {createUser} btnName = {"Create User"}/>
    </div>
  )
}

export default CreateUser
