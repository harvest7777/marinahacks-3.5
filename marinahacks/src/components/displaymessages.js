import React, { useState, useEffect } from "react";
import io from 'socket.io-client';

function DisplayMessage({ room }) {  // room is now a prop
    const [messages, setMessages] = useState([]);
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        const socket = io('http://localhost:5000');

        // Log connection and join the room
        socket.on('connect', () => {
            console.log('Connected to server');
            socket.emit('join_room', room);  // Join the room on connection
        });

        // Handlers for various socket events
        socket.on('user_count', ({ count }) => {
            setUserCount(count);
        });

        socket.on('new_message', ({ message }) => {
            setMessages(prevMessages => [...prevMessages, message]);
        });

        socket.on('disconnected_user', ({ message }) => {  // Assume message is passed
            setMessages(prevMessages => [...prevMessages, message]);
        });

        socket.on('connected_user', ({ message }) => {  // Assume message is passed
            setMessages(prevMessages => [...prevMessages, message]);
        });

        // Cleanup function to disconnect socket on unmount
        return () => {
            socket.disconnect();
        };
    }, [room]);  // Dependency array includes room to reconnect if it changes

    return (
        <div>
            <h2>Messages</h2>
            <h2>Online: {userCount}</h2>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayMessage;
//Dynamic Room Support: The room is now passed as a prop to DisplayMessage, making it more flexible.
//Proper Connection Management: The connection and room joining logic are combined under a single connect event handler.
//Event Handling: Updated to assume that messages indicating a user has connected or disconnected are passed with the event, allowing for more informative messages.
//Cleanup and Error Handling: The cleanup function ensures the socket is properly disconnected to prevent memory leaks.