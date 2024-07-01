import { useEffect, useState } from 'react'
import axios from 'axios'
import './MessageInput.css'
import config from '../assets/config.json'
import { socket } from '../socket'

const MessageInput = (props: any) => {
    const [content, setContent] = useState('')
    const [isConnected, setIsConnected] = useState(socket.connected)

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const res = await axios.post(`${config.api_endpoint}/messages/create`,
            {
                conversation_id: props.conversation_id,
                content: content
            },
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        )
        let data = {
            "conversation_id": props.conversation_id,
            "content": content,
            "sender": localStorage.getItem('username')
        }

        socket.emit('message', data)

        console.log(res)
        setContent('')
    }

    const handleContent = (e: any) => {
        setContent(e.target.value)
    }

    useEffect(() => {
        function onConnect() {
            setIsConnected(true)
        }

        function onDisconnect() {
            setIsConnected(false)
        }

        socket.on('connect', onConnect)
        socket.on('disconnect', onDisconnect)
    })

    return (
        <div className="message-input roboto-regular">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Message"
                    value={content}
                    onChange={handleContent}
                />

                <button type="submit">send</button>
                <p>{isConnected}</p>
            </form>
        </div>
    )
}

export default MessageInput
