import React, { useState, useEffect } from "react";
import io from 'socket.io-client';

function DisplayMessage() {
    const [messages, setMessages] = useState([]);
    const [userCount, setUserCount] = useState(0);

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

    return (
        <div>
            <h2>Messages</h2>
            <h2>Online: {userCount}</h2>
            <ul>
                {messages.map((message, index) => {
                    const newImage = message.split(': ')[1];
                    if(!newImage){return;}
                    if(newImage[4] == ':'){
                        return (
                            <div className="drawing-container responses">
                                <img className='drawing-board' style={{width:'50px'}} key={index} src={newImage}></img>
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
