import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Avatar } from "@nextui-org/avatar";
import { Chip } from "@nextui-org/chip";

const Message = (props: any) => {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Avatar
                    name={props.name}
                />
                <div className="flex flex-col">
                    <p className="text-md">{props.name}</p>
                </div>
                <p className="text-xs">{props.sent_at}</p>
            </CardHeader>
            <CardBody>
                <p>{props.message}</p>
            </CardBody>
            <CardFooter>
                <Chip size="sm" color="success">Admin Placeholder</Chip>
            </CardFooter>
        </Card>
    )
}

export default Message