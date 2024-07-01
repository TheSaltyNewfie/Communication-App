import { useState, useEffect } from 'react'
import axios from 'axios'
import { Message } from './datatypes'
import './MessageBox.css'
import config from '../assets/config.json'
import { socket } from '../socket'

const MessageBox = (props: any) => {
    const [messages, setMessages] = useState<Message[]>([])
    const [isConnected, setIsConnected] = useState(socket.connected)


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
    }, [])

    useEffect(() => {

        function onConnect() {
            setIsConnected(true)
        }

        function onDisconnect() {
            setIsConnected(false)
        }

        function onMessage(data: any) {
            console.log(data)

            setMessages(previous => [data, ...previous])
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
                    {/*<p>{message.sent_at.toString()}</p>*/}
                </div>
            ))}
        </div>
    )
}

export default MessageBox
