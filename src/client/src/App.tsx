import { Route, Routes } from "react-router-dom";

import ChatPage from "@/pages/ChatPage";
import LoginPage from "@/pages/LoginPage";
import ConversationPage from "@/pages/ConversationPage";
import { getState } from "@/utils/state";
import { socket } from "@/config/socket";

import "./styles/globals.css";
import { useEffect, useState } from "react";

function App() {

	const [conversations, setConversations] = useState({})

	// useEffect(() => {
	// 	const onConnect = () => {
	// 		console.log('connected')
	// 	}

	// 	const onDisconnect = () => {
	// 		console.log('disconnected')
	// 	}

	// 	const onHeartbeatRequest = () => {
	// 		socket.emit('heartbeat', getState())
	// 	}

	// 	const onUpdate = (data: any) => {
	// 		console.log(data)
	// 		setConversations(data)
	// 	}

	// 	socket.on('heartbeatRequest', onHeartbeatRequest)

	// 	socket.on('update', onUpdate)

	// 	return () => {
	// 		socket.off('connect', onConnect)
	// 		socket.off('disconnect', onDisconnect)
	// 		socket.off('heartbeatRequest', onHeartbeatRequest)
	// 		socket.off('update', onUpdate)
	// 	}
	// 	console.log(conversations)

	// }, [])

	return (
		<main className="dark text-foreground bg-background">
			<Routes>
				<Route element={<ChatPage />} path="/chat" />
				<Route element={<LoginPage />} path="/" />
				<Route element={<ConversationPage />} path="/conversations" />
			</Routes>
		</main>
	);
}

export default App;
