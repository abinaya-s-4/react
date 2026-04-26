import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({chatMessage,setChatMessage}){
        const [inputText, setInputText] = useState('')

        function saveInputText(event){
          setInputText(event.target.value)
        }
        function sendMessage(){
          const newChatMessages = [
            ...chatMessage,
            {
              message : inputText,
              sender: 'user',
              id: crypto.randomUUID()
            }
          ]

          setChatMessage(newChatMessages);

          const response = Chatbot.getResponse(inputText);
          setChatMessage([
            ...newChatMessages,
            {
              message : response,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);


          setInputText('');
          console.log("After clear:", inputText);
          }
        

        return (
          <div className = "chat-input-container">
          <input 
            placeholder="Send a message to Chatbot" 
            size ="30"
            value = {inputText}
            onChange ={saveInputText}
            className = "chat-input" />
          <button
            onClick= {sendMessage}
            className ="send-button" >Send</button>
          </div>
        );
      }