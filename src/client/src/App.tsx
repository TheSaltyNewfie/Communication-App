import { Route, Routes } from "react-router-dom";

import ChatPage from "@/pages/ChatPage";
import LoginPage from "@/pages/LoginPage";

import "./styles/globals.css";

function App() {
  return (
    <main className="dark text-foreground bg-background">
      <Routes>
        <Route element={<ChatPage />} path="/chat" />
        <Route element={<LoginPage />} path="/" />
      </Routes>
    </main>
  );
}

export default App;
