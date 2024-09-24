import "./style.css"
import {useState} from 'react'
import axios from 'axios'

export const Signup = ({setIsRegistered}) => {
    
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({status: false, message: ""})
    const [type, setType] = useState("error")
    const [isDisabled, setIsDisabled] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (username === "" || password === "" || name === "" || email === "") {

            setError({status: true, message: "Please fill al your information"})
            return
        }

        try {

            await axios.post(`http://localhost:8080/api/v1/auth/signup`,
                {
                    username: username,
                    email: email,
                    name: name,
                    password: password
                }
            )

            setType("success")
            setError({status: true, message: "User Created Succesfully"})
            setIsDisabled(true)
            setTimeout(() => {
                setIsRegistered(true)
            }, 3000) 
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
            <h2>Register</h2>
                <input 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="Email"
                    disabled={isDisabled}>
                </input>

                <input 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    type="text" 
                    placeholder="Username"
                    disabled={isDisabled}>
                </input>

                <input 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    type="text" 
                    placeholder="Full Name"
                    disabled={isDisabled}>
                </input>

                <input 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password"
                    disabled={isDisabled}>
                </input>

                <button disabled={isDisabled}>Sign Up</button>
                <p className="link" onClick={() => setIsRegistered(true)}>Already have an account?</p>
                {error.status && <p className={type}>{error.message}</p>}
            </form>
        </section>
    )
}