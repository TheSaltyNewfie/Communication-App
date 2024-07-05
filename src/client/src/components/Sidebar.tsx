import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Button, ButtonGroup } from "@nextui-org/button"
import { Divider } from "@nextui-org/divider"
import UserCard from "./UserCard"

const Sidebar = (props: any) => {

    return (
        <div className="space-y-4">

            <Card>
                <CardBody className="space-y-2">
                    <Button color="primary">
                        Home
                    </Button>
                    <Button color="secondary">
                        Profile
                    </Button>
                    <Button color="success">
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
                    <UserCard username="June" />
                    <UserCard username="John" />
                    <UserCard username="Emily" />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <p>Settings</p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <Button color="danger">
                        Logout
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Sidebar