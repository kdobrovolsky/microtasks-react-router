import {ReactNode} from "react";
import {Navigate} from "react-router-dom";


type Props = {
    children: ReactNode
}

export const ProtectedRoute = ({children}: Props) => {
    const logget = true
    return logget? children:<Navigate to={'/error'}/>
}