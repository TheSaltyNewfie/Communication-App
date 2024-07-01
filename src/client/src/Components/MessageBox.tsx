import { useState, useEffect } from 'react'
import axios from 'axios'
import { Message } from './datatypes'
import './MessageBox.css'
import config from '../assets/config.json'
import { socket } from '../socket'

const MessageBox = (props: any) => {
    const [isConnected, setIsConnected] = useState(socket.connected)

    useEffect(() => {
        props.getMessages()
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

            if (data.conversation_id == props.conversation_id) {
                props.setCurrentMessages((previous: Message[]) => [data, ...previous])
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
    }, [props.currentMessages])

    return (
        <div className="message-area">
            {props.currentMessages.map((message: Message, index: any) => (
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
