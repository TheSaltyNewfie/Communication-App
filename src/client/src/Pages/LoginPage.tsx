import { useState, useEffect } from 'react'
import { User } from '../Components/datatypes'
import axios from 'axios'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import config from '../assets/config.json'

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const submitLogin = async (e: any) => {
        e.preventDefault()

        const res = await axios.post(
            `${config.api_endpoint}/users/authenticate`,
            {
                username: username,
                password: password
            }
        )

        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        console.log()
        localStorage.setItem('sender_id', String(res.data.sender_id))
        navigate('/')
    }

    const handleUsername = (e: any) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const handleRegister = () => {
        navigate('/register')
    }

    return (
        <div className="login-area foreground roboto-regular">
            <div className="login-card">
                <form onSubmit={submitLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={handleUsername}
                        className="roboto-regular"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                        className="roboto-regular"
                    />

                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleRegister}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
