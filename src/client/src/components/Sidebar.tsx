import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Divider } from "@nextui-org/divider"
import UserCard from "./UserCard"
import { useNavigate } from "react-router-dom"

const Sidebar = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        navigate('/')
    }

    return (
        <div className="space-y-4">

            <Card>
                <CardBody className="space-y-2">
                    <p>currently in {localStorage.getItem("conversation")}</p>
                    <Button color="primary" onClick={() => navigate('/chat')}>
                        Home
                    </Button>
                    <Button color="secondary">
                        Profile
                    </Button>
                    <Button color="success" onClick={() => navigate('/conversations')}>
                        Conversations
                    </Button>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <p>Online Users:</p>
                </CardHeader>
                <Divider />
                <CardBody className="space-y-2">
                    <UserCard username="example" />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <p>Settings</p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <Button color="danger" onClick={logout}>
                        Logout
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Sidebar