import MessageBox from '../Components/MessageBox'
import './HomePage.css'

const HomePage = () => {

    return (
        <div className='main roboto-regular'>
            <div className='navbar'>
                <button className='roboto-regular'>Home</button>
                <button className='roboto-regular'>Convos</button>
                <button className='roboto-regular'>Log out</button>
            </div>
            <MessageBox className='messagebox' conversation_id="2"/>
        </div>
    )
}

export default HomePage