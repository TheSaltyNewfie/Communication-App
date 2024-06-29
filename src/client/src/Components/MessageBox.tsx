import { useState, useEffect, ReactNode } from 'react'
import axios from 'axios'
import {Message} from './datatypes'
import './MessageBox.css'

const MessageBox = (props: any) => {
    const [messages, setMessages] = useState<Message[]>([])

    const getMessages = async () => {
        const res = await axios.get(`http://127.0.0.1:5000/messages/${props.conversation_id}`)
        console.log(res)
        let reverse = res.data
        reverse.reverse()
        setMessages(reverse)
    }

    useEffect(() => {
        getMessages()
    }, [])

    return (
        <div className='message-area'>
            {messages.map((message, index) => (
                <div className='message' key={index}>
                    <h2>{message.sender}</h2>
                    <p>{message.content}</p>
                </div>
            ))}
        </div>
    )
}

export default MessageBox