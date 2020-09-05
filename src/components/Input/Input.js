import React from 'react'
import './Input.css'
function Input({message,setMessage,sendMessage}) {
    return (
        <form className="form">
            <input placeholder="type a message...   " className="input" type="text" value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} />
            <button className="sendButton" onClick={(e)=>sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input
