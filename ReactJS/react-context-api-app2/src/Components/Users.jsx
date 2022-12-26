import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { MyContextProvider } from './MyContext';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUser();
    }, [])
    const getAllUser = async () => {
        let response = await (await fetch("http://localhost:3001/users")).json();
        // console.log(response);
        setUsers(response);
    }
    return (
        <div>
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>University</th>
                        <th>Institute</th>
                        <th>Branch</th>
                        <th>Degree</th>
                        <th>Status</th>
                        <th>Areas of Interest</th>
                        <th>AVG CPI</th>
                        <th>Experience</th>
                        <th>Website</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <MyContextProvider value={users}>
                        <User/>
                    </MyContextProvider>
                </tbody>
            </table>
        </div>
    )
}

export default Users
