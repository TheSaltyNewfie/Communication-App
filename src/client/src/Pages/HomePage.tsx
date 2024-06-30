import { useState, useEffect } from 'react'
import MessageBox from '../Components/MessageBox'
import MessageInput from '../Components/MessageInput'
import './HomePage.css'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    //<MessageBox className='messagebox' conversation_id="2"/>

    const senderID = localStorage.getItem('sender_id')
    const navigate = useNavigate()

    useEffect(() => {
        if(senderID === null) {
            navigate('/login')
        }
    })

    return (
        <div className='main-root'>
            <div className='nav'>
                <button>One</button>
                <button>Two</button>
                <button>Three</button>
            </div>
            <div className='message-root'>
                <div className='messages-main'>
                    <MessageBox className='messagebox' conversation_id="2"/>
                </div>
                <div className='messages-input'>
                    <MessageInput conversation_id="2" sender_id={senderID}/>
                </div>
            </div>

        </div>
    )
}

export default HomePage