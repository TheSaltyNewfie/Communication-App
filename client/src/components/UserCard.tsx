import { Card, CardBody } from "@nextui-org/card"
import { Avatar } from "@nextui-org/avatar"

const UserCard = (props: any) => {

    return (
        <Card>
            <CardBody className="flex-row space-x-2 items-center">
                <Avatar name={props.username} />
                <p>{props.username}</p>
            </CardBody>
        </Card>
    )
}

export default UserCard