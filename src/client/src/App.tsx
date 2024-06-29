import { useState } from 'react'
import MessageBox from './Components/MessageBox'

import './App.css'

function App() {

  return (
    <div className='main'>
      <div className='navbar'>
        <button>Home</button>
        <button>Convos</button>
        <button>Log out</button>
      </div>
        <MessageBox className='messagebox' conversation_id="2"/>
    </div>
  )
}

export default App
