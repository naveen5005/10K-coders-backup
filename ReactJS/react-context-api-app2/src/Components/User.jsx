import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContextConsumer } from './MyContext'

const User = () => {
    // console.log(user)
    const navigate = useNavigate();

    const editUser = (user) => {
        navigate("/edit/"+user.id);
    }
    const deleteUser = (user) => {
        // console.log(user)
        navigate("/delete/"+user.id);
    }
    return (
        <MyContextConsumer>
            {(userInfo,i) => (
                Object.values(userInfo).map((user,i) => <tr key={i}>
                <td>{user.university}</td>
                <td>{user.institute}</td>
                <td>{user.branch}</td>
                <td>{user.degree}</td>
                <td>{user.status}</td>
                <td>{user.areasofInterest}</td>
                <td>{user.avgCPI}</td>
                <td>{user.experience}</td>
                <td>{user.website}</td>
                <td>
                    <button type='button' className='btn btn-warning' onClick={() => { editUser(user) }}>EDIT</button>
                </td>
                <td>
                    <button type='button' className='btn btn-danger' onClick={() => { deleteUser(user) }}>DELETE</button>
                </td>
            </tr>)
            )}

        </MyContextConsumer>
    )
}

export default User
