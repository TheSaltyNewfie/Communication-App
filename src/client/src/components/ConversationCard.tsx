import { Button } from "@nextui-org/button"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { useNavigate } from "react-router-dom"

const ConversationCard = (props: any) => {
    const navigate = useNavigate()
    const setConversation = () => {
        console.log(props.conversation)
        localStorage.setItem("conversation", props.conversation.conversation_id)
        navigate(`/chat`)
    }

    return (
        <Card className="p-4">
            <CardHeader>
                <h1>{props.conversation.name}</h1>
            </CardHeader>
            <CardBody>
                <p>Amount of users: 0</p>
            </CardBody>
            <CardFooter>
                <Button onClick={setConversation}>Join</Button>
            </CardFooter>
        </Card>
    )
}

export default ConversationCard