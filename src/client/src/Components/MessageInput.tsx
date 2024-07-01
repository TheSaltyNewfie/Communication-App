import { useState } from 'react'
import axios from 'axios'
import './MessageInput.css'
import config from '../assets/config.json'

const MessageInput = (props: any) => {
    const [content, setContent] = useState('')

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

        console.log(res)
        setContent('')
    }

    const handleContent = (e: any) => {
        setContent(e.target.value)
    }

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
            </form>
        </div>
    )
}

export default MessageInput
