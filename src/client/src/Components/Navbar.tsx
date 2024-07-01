import { useState, useEffect } from 'react'
import config from '../assets/config.json'
import { Conversation } from './datatypes'
import axios from 'axios'
import './Navbar.css'

const Navbar = (props: any) => {

    const [conversations, setConversations] = useState<Conversation[]>([])

    const getData = async () => {
        const res = await axios.get(`${config.api_endpoint}/conversations`, {
            headers: {
                Authorization: localStorage.getItem('token')
            },
        })
        setConversations(res.data)
    }

    const setConvo = (value: number) => {
        props.conversationNumber(value)
        props.currentMessages([])
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="nav">
            {conversations.map((_, key) => (
                <button onClick={() => setConvo(key)} key={key}>{conversations[key].name}</button>
            ))}
            <button onClick={props.openModal}>Create</button>
        </div>
    )
}

export default Navbar
