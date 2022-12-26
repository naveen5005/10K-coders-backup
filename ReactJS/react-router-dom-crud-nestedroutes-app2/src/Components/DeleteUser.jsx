import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserForm from './UserForm'

const DeleteUser = () => {
    const params = useParams();
    const navigate = useNavigate();
    //   console.log(params)
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
    useEffect(() => {
        fetch("http://localhost:3001/users2/" + params.id).then((response) => response.json())
            .then((data) => {
                setUser2(data);
            })
    }, [])
    const confirmDelete = () => {
        fetch("http://localhost:3001/users2/" + params.id, {
            method: 'delete'
        }).then(() => {
            navigate("/");
        })
    }
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
    return (
        <div>
            {/* <h2>Welcome to delete page</h2> */}
            <UserForm handleChange={handleChange} user2={user2} handleButton={confirmDelete} btnName={"Confirm Delete"} />
        </div>
    )
}

export default DeleteUser
