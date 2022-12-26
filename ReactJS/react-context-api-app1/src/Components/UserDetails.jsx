import React from 'react'
import { MyContextConsumer } from './MyContext'

const UserDetails = () => {
    return (
        <div>
            <h2>Welcome to User Details component</h2>
            <hr />
            <MyContextConsumer>
                {(userInfo) => (
                    <ul>
                        {userInfo.map((user, i) => (
                            <li key={i}>{user}</li>
                        ))}
                    </ul>
                )}
            </MyContextConsumer>
        </div>
    )
}

export default UserDetails
