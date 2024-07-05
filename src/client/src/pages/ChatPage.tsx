import React, { useState, useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import Messages from '@/components/Messages'
import Sidebar from '@/components/Sidebar'
import config from '../config/config.json'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MessageInput from '@/components/MessageInput'

export default function ChatPage() {
	const navigate = useNavigate()

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

		getAccount()
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