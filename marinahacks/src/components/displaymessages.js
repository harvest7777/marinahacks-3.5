import React, { useState, useEffect, useRef } from "react";
import io from 'socket.io-client';

function DisplayMessage() {
    const [messages, setMessages] = useState([]);
    const [userCount, setUserCount] = useState(0);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const socket = io('http://localhost:5000');
        socket.on('connect', () => {
            console.log('Connected to server');
        });
        socket.on('user_count', ({ count }) => {
            setUserCount(count);
        });

        socket.on('new_message', ({ message }) => {
            setMessages(prevMessages => [...prevMessages, message]);
        });

        socket.on('disconnected_user', () => {
            const leave_message = "A user has left!";
            setMessages(prevMessages => [...prevMessages, leave_message]);
        });

        socket.on('connected_user', () => {
            const join_message = "A user has joined!";
            setMessages(prevMessages => [...prevMessages, join_message]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        const scroll = messagesEndRef.current;
    if (scroll) {
      scroll.scrollTop = scroll.scrollHeight;
    }
    })

    return (
        <div>
            <h2>Online: {userCount}</h2>
            <ul className="responses" ref={messagesEndRef}>
                {messages.map((message, index) => {
                    const newImage = message.split(': ')[1];
                    const newName = message.split(': ')[0].split(' - ')[1] //CHAT WHAT IS THIS :SOB:
                    if(!newImage){return;}
                    if(newImage[4] == ':'){
                        return (
                            <div key={index} className="drawing-container">
                                <p>{newName}</p>
                                <img className='drawing-board' key={index} src={newImage}></img>
                            </div>
                        );
                    }
                    return <li key={index}>{message}</li>;
                })}
            </ul>
        </div>
    );
}

export default DisplayMessage;
