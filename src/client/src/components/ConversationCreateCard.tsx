import { Card, CardHeader, CardBody } from "@nextui-org/card"
import { Divider } from "@nextui-org/divider"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { useState } from "react"
import axios from "axios"
import config from "@/config/config"
import { useNavigate } from "react-router-dom"

const ConversationCreateCard = () => {
    const [conversationName, setConversationName] = useState("")
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const createConversation = async () => {
        const res = await axios.post(`${config.api_endpoint}/conversations/create`,
            {
                name: conversationName
            },
            {
                headers: {
                    Authorization: token
                }
            }
        )
        await localStorage.setItem("conversation", res.data.id)
        navigate('/chat')
    }

    return (
        <Card>
            <CardHeader>
                <h1>Create a new conversation</h1>
            </CardHeader>
            <Divider />
            <CardBody>
                <form>
                    <Input placeholder="Conversation name" onChange={(e) => setConversationName(e.target.value)} />
                    <Button onClick={createConversation}>Create</Button>
                </form>
            </CardBody>
        </Card>
    )
}

export default ConversationCreateCard