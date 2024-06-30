import { useState, useEffect } from 'react'
import config from '../assets/config.json'
import { Conversation } from './datatypes'
import axios from 'axios'
import './Navbar.css'

const Navbar = (props: any) => {

    const [conversations, setConversations] = useState<Conversation[]>([])
    const [conversation, setConversation] = useState(0)

    const getData = async () => {
        const res = await axios.get(`${config.api_endpoint}/conversations`)
        setConversations(res.data)
    }

    const setConvo = (value: number) => {
        setConversation(value)

        props.conversationNumber(value)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="nav">
            {conversations.map((index, key) => (
                <button onClick={() => setConvo(key)} key={key}>{conversations[key].name}</button>
            ))}
            <button>Create</button>
        </div>
    )
}

export default Navbar
