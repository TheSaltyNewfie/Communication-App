import Message from "./Message";

import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { socket } from '../config/socket'
import config from '../config/config'

interface Message {
    sender: string
    content: string
    sent_at: string
}

const Messages = () => {
    const [messages, setMessages] = useState<Message[]>([])
    const [isConnected, setIsConnected] = useState(socket.connected)
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const fetchMessages = async () => {
            console.log(`${config.api_endpoint}/messages/${localStorage.getItem("conversation")}`)
            const response = await axios.get(`${config.api_endpoint}/messages/${localStorage.getItem("conversation")}`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            setMessages(response.data)
        }
        fetchMessages()
    }, [])

    useEffect(() => {
        console.log(isConnected)

        function onConnect() {
            setIsConnected(true)
        }

        function onDisconnect() {
            setIsConnected(false)
        }

        function onMessage(data: any) {
            console.log(data)

            if (data.conversation_id == 0) {
                setMessages((previous: Message[]) => [...previous, data])
            }

        }

        socket.on('connect', onConnect)
        socket.on('disconnect', onDisconnect)
        socket.on('newMessage', onMessage)

        return () => {
            socket.off('connect', onConnect)
            socket.off('disconnect', onDisconnect)
            socket.off('newMessage', onMessage)
        }
    }, [messages])

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="space-y-4">
            {messages.map((message, index) => (
                <Message className="mb-2" key={index} name={message.sender} message={message.content} sent_at={message.sent_at} />
            ))}
            <div ref={messagesEndRef} />
        </div>
    )
}

export default Messages