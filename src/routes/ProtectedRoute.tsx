import {ReactNode} from "react";
import {Navigate} from "react-router-dom";


type Props = {
    children: ReactNode
}

export const ProtectedRoute = ({children}: Props) => {
    const logget = false
    return logget? children:<Navigate to={'/login'}/>
}