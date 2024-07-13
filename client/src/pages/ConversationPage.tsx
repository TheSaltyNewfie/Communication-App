import ConversationCard from "@/components/ConversationCard"
import { useState, useEffect } from "react"
import axios from "axios"
import config from "@/config/config"
import ConversationCreateCard from "@/components/ConversationCreateCard"


const ConversationPage = () => {
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const getConvos = async () => {
            console.log(`${config.api_endpoint}/conversations`)
            const response = await axios.get(`${config.api_endpoint}/conversations`, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            setConversations(response.data)
            console.log(response.data)
        }
        getConvos()
    }, [])

    return (
        <main className="flex flex-row flex-wrap h-screen justify-start items-start p-4 gap-4">
            <div>
                <ConversationCreateCard />
            </div>
            {conversations.map((conversation: any) => (
                <ConversationCard key={conversation.conversation_id} conversation={conversation} />
            ))}
        </main>
    )
}

export default ConversationPage