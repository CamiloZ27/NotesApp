import "./style.css"
import {useState} from 'react'
import axios from 'axios'

export const Signin = ({setUser, setIsRegistered}) => {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({status: false, message: ""})

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (username === "" || password === "") {

            setError({status: true, message: "Please enter the username and password"})
            return
        }

        try {

            const login = await axios.get(`http://localhost:8080/api/v1/auth/login/${username}/${password}`)

            setUser(login.data.userData)
        } catch (error) {

            setError({status: true, message: error.response.data.error})
        }
    }

    return (
        <section className="login">
            <h1 className="title">Welcome to NotesApp</h1>

            <form 
                className="form"
                onSubmit={handleSubmit}
            >
            <h2>Login</h2>
                <input 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    type="text" 
                    placeholder="Username or email">
                </input>

                <input 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password">
                </input>

                <button>Sign In</button>
                <p className="link" onClick={() => setIsRegistered(false)}>Don't have an account?</p>
                {error.status && <p className="error">{error.message}</p>}
            </form>
        </section>
    )
}