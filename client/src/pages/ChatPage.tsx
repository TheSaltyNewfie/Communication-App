import { useState, useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import Messages from '@/components/Messages'
import Sidebar from '@/components/Sidebar'
import config from '../config/config'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MessageInput from '@/components/MessageInput'
import { setState } from '@/utils/state'

export default function ChatPage() {
	const navigate = useNavigate()
	const [conversations, setConversations] = useState(0)

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
					navigate('/')
				}
			}
		}

		const checkConversations = async () => {
			const response = await axios.get(`${config.api_endpoint}/conversations`, {
				headers: {
					Authorization: localStorage.getItem('token')
				}
			})
			setConversations(response.data.length)
		}

		getAccount()
		checkConversations()
		console.log(conversations)

		if (localStorage.getItem("conversation") == null || localStorage.getItem("conversation") == '0') {
			navigate('/conversations')
		}

		setState({ username: localStorage.getItem('username'), conversation: localStorage.getItem('conversation'), user_id: localStorage.getItem('sender_id') })
		//sendState(sessionStorage.getItem('state'))
	}, [])

	return (
		<main>
			<div className="flex h-screen">
				<div className="w-64 flex flex-col bg-zinc-900 justify-between">
					<div className="p-4">
						<Sidebar />
					</div>
				</div>
				<div className="flex-grow flex flex-col p-4 overflow-auto relative">
					<div className="flex-grow overflow-auto">
						<Messages />
					</div>
					<MessageInput />
				</div>
			</div>
		</main>
	);
}