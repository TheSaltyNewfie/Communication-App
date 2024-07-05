import { useEffect, useState } from "react"
import { Input } from "@nextui-org/input";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import axios from "axios";

const LoginPage = () => {
    const [loginDetails, setLoginDetails] = useState({
        username: "",
        password: ""
    })

    const [registerDetails, setRegisterDetails] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        email: ""
    })

    const [isLogin, setIsLogin] = useState(false)
    const [isRegister, setIsRegister] = useState(false)

    useEffect(() => {
        const isLoginFilled = loginDetails.username !== "" || loginDetails.password !== "";
        const isRegisterFilled = registerDetails.username !== "" || registerDetails.password !== "" || registerDetails.confirmPassword !== "" || registerDetails.email !== "";

        setIsLogin(isRegisterFilled);
        setIsRegister(isLoginFilled);
    }, [loginDetails, registerDetails])

    const handleLogin = async () => {
        const response = await axios.post("http://localhost:5001/users/authenticate", loginDetails)

        localStorage.setItem("token", response.data.token)
        localStorage.setItem('sender_id', String(response.data.sender_id))
        window.location.href = "/chat"
    }

    const handleRegister = async () => {
        const response = await axios.post("http://localhost:5001/users/create", registerDetails)

        localStorage.setItem("token", response.data.token)
        localStorage.setItem('sender_id', String(response.data.sender_id))
        window.location.href = "/chat"
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-20">
            <h1 className="text-4xl font-bold">Welcome to the Chat App</h1>

            <div className="flex flex-row gap-4">
                <Card isDisabled={isLogin}>
                    <CardHeader className="flex flex-col gap-2">
                        <h1>Login</h1>
                        <p className="text-xs">A regular here eh?</p>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Username" value={loginDetails.username} onChange={(e) => setLoginDetails({ ...loginDetails, username: e.target.value })} />
                        <Input label="Password" value={loginDetails.password} onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} />
                    </CardBody>
                    <CardFooter>
                        <Button onClick={handleLogin}>Login</Button>
                    </CardFooter>
                </Card>

                <Card isDisabled={isRegister}>
                    <CardHeader className="flex flex-col gap-2">
                        <h1>Register</h1>
                        <p className="text-xs">Look at that, you can register too!</p>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Username" value={registerDetails.username} onChange={(e) => setRegisterDetails({ ...registerDetails, username: e.target.value })} />
                        <Input label="Email" value={registerDetails.email} onChange={(e) => setRegisterDetails({ ...registerDetails, email: e.target.value })} />
                        <Input label="Password" value={registerDetails.password} onChange={(e) => setRegisterDetails({ ...registerDetails, password: e.target.value })} />
                        <Input label="Confirm Password" value={registerDetails.confirmPassword} onChange={(e) => setRegisterDetails({ ...registerDetails, confirmPassword: e.target.value })} />
                    </CardBody>
                    <CardFooter>
                        <Button onClick={handleRegister}>Submit</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default LoginPage