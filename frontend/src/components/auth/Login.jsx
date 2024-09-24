import {useState} from 'react'
import { Signin } from './Signin'
import { Signup } from './Signup'

export const Login = ({setUser}) => {

    const [isRegistered, setIsRegistered] = useState(true)

    return (
        <div>
            { 
                isRegistered 
                ? <Signin setUser={setUser} setIsRegistered={setIsRegistered}/>
                : <Signup setIsRegistered={setIsRegistered}/>
            }
        </div>
    )
}