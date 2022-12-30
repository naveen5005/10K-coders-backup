import { useAuths } from "./MyAuth"
import {Navigate} from "react-router-dom"

export const RequiredAuth = ({children}) => {
    // console.log(children)
    const auth = useAuths();
    if(!auth.user){
        return <Navigate to={'/'}/>
    }
    return children
}