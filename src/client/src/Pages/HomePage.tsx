import { useState, useEffect } from 'react'
import MessageBox from '../Components/MessageBox'
import MessageInput from '../Components/MessageInput'
import Navbar from '../Components/Navbar'
import './HomePage.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import config from '../assets/config.json'
import Modal from '../Components/Modal'
import { Message } from '../Components/datatypes'

const HomePage = () => {
    const senderID = localStorage.getItem('sender_id')
    const navigate = useNavigate()

    const [conversation, setConversation] = useState(0)
    const [isModalOpen, setModalOpen] = useState(false)
    const [convoName, setConvoName] = useState('')
    const [currentMessages, setCurrentMessages] = useState<Message[]>([])
    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    const createConversation = async (e: any) => {
        e.preventDefault()

        await axios.post(`${config.api_endpoint}/conversations/create`, {
            headers: {
                Authorization: localStorage.getItem('token')
            },
            name: convoName
        })
        closeModal()
    }

    useEffect(() => {
        const getAccount = async () => {
            try {
                const res = await axios.get(`${config.api_endpoint}/account`, {
                    headers: {
                        "Authorization": localStorage.getItem('token')
                    }
                })

                localStorage.setItem('username', res.data.username)
            } catch (error: any) {
                if (error.response.status == 401) {
                    navigate('/login')
                }
            }
        }

        getAccount()

        if (senderID === null) {
            navigate('/login')
        }

        console.log(currentMessages)
    }, [])

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
                    <button onClick={closeModal}>Cancel</button>
                </form>
            </Modal>

            <Navbar conversationNumber={setConversation} openModal={openModal} setCurrentMessages={setCurrentMessages} />

            <div className="message-root">
                <div className="messages-main">
                    <MessageBox className="messagebox" conversation_id={conversation.toString()} currentMessages={setCurrentMessages} />
                </div>
                <div className="messages-input">
                    <MessageInput conversation_id={conversation.toString()} sender_id={senderID} />
                </div>
            </div>
        </div>
    )
}

export default HomePage
