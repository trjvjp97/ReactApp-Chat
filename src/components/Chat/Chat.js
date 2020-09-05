import React,{useState,useEffect} from 'react'
import queryString from "query-string";
import InfoBar from "../InfoBar/InfoBar";
import "./Chat.css";
import Input from '../Input/Input'
import io from "socket.io-client";
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextConatiner';

let socket;

function Chat({location}) {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);
    const ENDPOINT= 'https://react-chat-application-client.herokuapp.com/'
    useEffect(()=>{
        const {name,room} = queryString.parse(location.search)
        socket=io(ENDPOINT)
        setName(name)
        setRoom(room)
        socket.emit('join',{name,room},(error)=>{
        
        })
        return ()=>{
            socket.emit('disconnect')
            socket.off()
        }
    },[ENDPOINT,location.search])

    useEffect(()=>{ 
        socket.on('message',(message)=>{ 
            setMessages([...messages,message])
        })
    },[messages])

    const sendMessage = (e)=>{
        e.preventDefault()
        if(message){
            socket.emit('sendMessage',message,()=> setMessage(''))
        }
    }
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextContainer />
        </div>
    )
}
export default Chat
