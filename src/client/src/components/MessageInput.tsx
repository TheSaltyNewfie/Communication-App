
import { socket } from '../config/socket'

import { Input } from "@nextui-org/input"
import { Button } from '@nextui-org/button'
import { useState } from 'react'
import config from '../config/config.json'
import axios from 'axios'

const MessageInput = () => {
    const [message, setMessage] = useState("")

    const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await axios.post(`${config.api_endpoint}/messages/create`,
            {
                conversation_id: 0,
                content: message
            },
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        )

        let data = {
            "conversation_id": "0",
            "content": message,
            "sender": localStorage.getItem('username')
        }

        socket.emit('message', data)
        setMessage("")
    }

    return (
        <div className="p-4 flex flex-row items-center bg-transparent">
            <form onSubmit={handleSend} className="flex w-full items-center">
                <Input className="flex-grow mr-2" type="text" label="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <Button color="primary" type="submit">Send</Button>
            </form>
        </div>
    )
}

export default MessageInput