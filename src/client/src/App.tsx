import { Route, Routes } from "react-router-dom";

import ChatPage from "@/pages/ChatPage";
import LoginPage from "@/pages/LoginPage";
import ConversationPage from "@/pages/ConversationPage";

import "./styles/globals.css";

function App() {
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
