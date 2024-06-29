import { useState } from "react"
import './MessageInput.css'

const MessageInput = () => {


    return (
        <div className="message-input roboto-regular">
            <form>
                <input
                    type="text"
                    placeholder="Message"
                />

                <button type="submit">send</button>
            </form>
        </div>
    )
}

export default MessageInput