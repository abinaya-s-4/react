import robotProfileImage from '../assets/robot.png'
import userProfileImage from '../assets/user.png'
import './ChatMessage.css'


export function ChatMessage(props){
        const message = props.message;// const {message, sender} = props // destructuring
        const sender = props.sender;

       
          return (
            <div className = {
              sender === 'user'
              ? 'chat-message-user' 
              : 'chat-message-robot'
            } >
            {sender === 'robot' && ( <img src ={robotProfileImage} className = "chat-message-profile" />) }
            <div className ="chat-message-text">
            {message}
            </div>
            {sender === 'user' && (<img src = {userProfileImage} className = "chat-message-profile"/>)}
          </div>
          );
      
        }