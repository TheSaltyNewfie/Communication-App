import MessageBox from '../Components/MessageBox'
import MessageInput from '../Components/MessageInput'
import './HomePage.css'

const HomePage = () => {

    //<MessageBox className='messagebox' conversation_id="2"/>

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
                    <MessageInput/>
                </div>
            </div>

        </div>
    )
}

export default HomePage