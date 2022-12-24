import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from './UserForm'

const EditUser = () => {
  const params = useParams();
  const navigate = useNavigate();
  const[user1,setUser1] =useState({
    fname : "",
    lname :"",
    dob : "",
    email :"",
    phnum : ""
  });
  const handleChange =(e)=>{
    var newUser = {...user1};
    newUser[e.target.name] = e.target.value;
    setUser1(newUser);
  }
  useEffect(()=>{
    fetch("http://localhost:3001/users1/"+params.id).then((response)=>response.json())
    .then((data)=>{
      setUser1(data);
    })
  },[])
  const updateUser =()=>{
    fetch("http://localhost:3001/users1/"+params.id,{
      method : "Put",
      body : JSON.stringify(user1),
      headers : {
        'content-Type' : 'application/json'
      }
    }).then(()=>{
      navigate("/");
    })
  }
  return (
    <div>
      {/* <h2>Welcome to EDIT page</h2> */}
      <UserForm handleChange={handleChange} user1={user1} btnName ={"Update User"} handleSubmit = {updateUser} />
    </div>
  )
}

export default EditUser
