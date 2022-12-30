import React from 'react'
import { useState } from 'react';
import { useAuths } from './MyAuth'
import { useNavigate} from 'react-router-dom'

const Logincomp = () => {
    const [userName, setUser] = useState("");
    const auth = useAuths();
    const navigate = useNavigate();
    // console.log(auth)

    const handleLogin = () => {
        auth.login(userName);
        navigate("/products");
    }
    return (
        <div>
            <form>
                <input type="text" value={userName}
                    onChange={(e)=>setUser(e.target.value)}/>
                <button type='button' onClick={handleLogin}>Login</button>
            </form>
            <p style={{color:"red"}} id="ProductMsg"></p>
        </div>
    )
}

export default Logincomp
