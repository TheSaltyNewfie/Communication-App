import { useState } from "react"
import axios from 'axios'
import './MessageInput.css'

const MessageInput = (props: any) => {

    const [content, setContent] = useState('')

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        
        const res = await axios.post('http://71.7.252.234:5000/messages/create',
            {
                "conversation_id": props.conversation_id,
                "sender_id": props.sender_id,
                "content": content
            }
        )

        setContent('')
        props.render_comments()
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