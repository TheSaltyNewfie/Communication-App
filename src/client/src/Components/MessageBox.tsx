import { useState, useEffect } from 'react'
import axios from 'axios'
import { Message } from './datatypes'
import './MessageBox.css'
import config from '../assets/config.json'

const MessageBox = (props: any) => {
    const [messages, setMessages] = useState<Message[]>([])
    const [ticking] = useState(true)
    const [count, setCount] = useState(0)

    const getMessages = async () => {
        const res = await axios.get(
            `${config.api_endpoint}/messages/${props.conversation_id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            },
        }
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
                    {config.special_names.includes(message.sender) ? (
                        <h2 style={{ color: config.special_name_color }}>{message.sender}</h2>
                    ) : (
                        <h2>{message.sender}</h2>
                    )}
                    <p>{message.content}</p>
                    <p>{message.sent_at.toString()}</p>
                </div>
            ))}
        </div>
    )
}

export default MessageBox
