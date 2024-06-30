import { useState, useEffect } from 'react'
import MessageBox from '../Components/MessageBox'
import MessageInput from '../Components/MessageInput'
import Navbar from '../Components/Navbar'
import './HomePage.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import config from '../assets/config.json'
import Modal from '../Components/Modal'

const HomePage = () => {
    const senderID = localStorage.getItem('sender_id')
    const navigate = useNavigate()

    const [conversation, setConversation] = useState(0)
    const [isModalOpen, setModalOpen] = useState(false)
    const [convoName, setConvoName] = useState('')
    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    const createConversation = async (e: any) => {
        e.preventDefault()

        await axios.post(`${config.api_endpoint}/conversations/create`, {
            name: convoName
        })
        closeModal()
    }

    useEffect(() => {
        const getAccount = async () => {
            await axios.get(`${config.api_endpoint}/account`, {
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }).catch((error: any) => {
                if (error.response.status == 401) {
                    navigate('/login')
                }
            })
        }

        getAccount()

        if (senderID === null) {
            navigate('/login')
        }
    })

    return (
        <div className="main-root">
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <form onSubmit={createConversation}>
                    <input
                        placeholder='Name'
                        value={convoName}
                        onChange={(e) => setConvoName(e.target.value)}
                    />
                    <button type='submit'>Create Conversation</button>
                </form>
            </Modal>

            <Navbar conversationNumber={setConversation} openModal={openModal} />

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
