import { useState, useEffect } from 'react'
import MessageBox from '../Components/MessageBox'
import MessageInput from '../Components/MessageInput'
import Navbar from '../Components/Navbar'
import './HomePage.css'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const senderID = localStorage.getItem('sender_id')
    const navigate = useNavigate()

    const [conversation, setConversation] = useState(0)

    useEffect(() => {
        if (senderID === null) {
            navigate('/login')
        }
    })

    return (
        <div className="main-root">
            <Navbar conversationNumber={setConversation} />
            <div className="message-root">
                <div className="messages-main">
                    <MessageBox className="messagebox" conversation_id={conversation.toString()} />
                </div>
                <div className="messages-input">
                    <MessageInput conversation_id={conversation.toString()} sender_id={senderID} />
                </div>
            </div>
        </div>
    )
}

export default HomePage
