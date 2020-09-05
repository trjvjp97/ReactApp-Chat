import React from 'react'
import './Message.css'
import ReactEmoji from "react-emoji";
function Message({message:{user,text},name}) {
    let isSentByCurrentUser = false
    const trimmedName = name.trim().toLowerCase()
    if(user===trimmedName){
        isSentByCurrentUser = true
    }
    return (
        isSentByCurrentUser?(
            <div className = "messageContainer justifyEnd">
                <span className="sentText pr-10">{trimmedName}</span>
                <div className="messageBox backgroundBlue">
                    <span className="messageText colorWhite">{ReactEmoji.emojify(text)}</span>
                </div>
            </div>
        ):(
            <div className = "messageContainer justifyStart">                
                <div className="messageBox backgroundLight">
                    <span className="messageText colorDark">{ReactEmoji.emojify(text)}</span>
                </div>
                <span className="sentText">{user}</span>
            </div>
        )
    )
}

export default Message
