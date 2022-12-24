import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import UserForm from './UserForm';

function DeleteUser() {
  const [users1, setUser1] = useState({
    fname : "",
    lname : "",
    dob : "",
    email : "",
    phnum : ""
  });
  const navigate = useNavigate();
  const params = useParams();
  console.log(params)
  useEffect(() => {
    fetch("http://localhost:3001/users1/" + params.id).then((response) => response.json())
    .then((data) => {
      setUser1(data);
    })
  },[])
  const handleChange =(e)=>{
    var newUser ={...users1};
    newUser[e.target.name] = e.target.value;
    setUser1(newUser);
  }
  const confirmDelete =()=>{
    fetch("http://localhost:3001/users1/" + params.id,{
      method : "Delete"
    }).then(()=>{
      navigate("/");
    })
  }
  return (
    <div>
      <UserForm user1={users1} handleChange={handleChange} handleSubmit ={confirmDelete} btnName ={"Confirm Delete"}/>
    </div>
  )
}

export default DeleteUser
