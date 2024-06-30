export interface Message {
    content: string
    message_id: number
    sender: string
    sent_at: Date
}

export interface Conversation {
    conversation_id: number
    name: string
}

export interface User {
    user_id: number
    username: string
    email: string
    token: string
}
