import { useState} from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages';



function App(){

  const [chatMessage, setChatMessage] = useState([{
    message:"hello chatbot" ,
    sender:"user",
    id : "id1"
  },{
    message:"Hello! How can I help you?" ,
    sender:"robot",
    id : "id2"
  },{
    message:"can you get me today's date" ,
    sender:"user",
    id : "id3"
  },{
    message:"Today is April 24" ,
    sender:"robot",
    id : "id4"
  }]);

  //const chatMessage = array[0];
  //const setChatMessage = array[1];

  return (
    <div className = "app-container">
  
  <ChatMessages
    chatMessage = {chatMessage}
  />
  <ChatInput
    chatMessage = {chatMessage}
    setChatMessage = {setChatMessage}
  />
  </div>
  )
}

export default App
