import { useState, useEffect } from 'react'
import axios from 'axios'
import { Message } from './datatypes'
import './MessageBox.css'
import config from '../assets/config.json'

const MessageBox = (props: any) => {
    const [messages, setMessages] = useState<Message[]>([])
    const [ticking, setTicking] = useState(true)
    const [count, setCount] = useState(0)

    const getMessages = async () => {
        const res = await axios.get(
            `${config.api_endpoint}/messages/${props.conversation_id}`
        )
        console.log(res)
        let reverse = res.data
        reverse.reverse()
        setMessages(reverse)
    }

    useEffect(() => {
        getMessages()
        const timer = setTimeout(() => ticking && setCount(count + 1), 1e3)
        return () => clearTimeout(timer)
    }, [count, ticking])

    return (
        <div className="message-area">
            {messages.map((message, index) => (
                <div className="message" key={index}>
                    {message.sender === 'TobiasDodge' ? (
                        <h2 style={{ color: 'gold' }}>{message.sender}</h2>
                    ) : (
                        <h2>{message.sender}</h2>
                    )}
                    <p>{message.content}</p>
                </div>
            ))}
        </div>
    )
}

export default MessageBox
