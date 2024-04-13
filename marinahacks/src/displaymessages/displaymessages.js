import React, { useState, useEffect } from "react";

function DisplayMessage() {
    const [messages, setMessages] = useState([]);

    // Function to fetch messages from the API
    const fetchMessages = async () => {
        try {
            const response = await fetch('/view-messages');
            if (!response.ok) {
                throw new Error('Failed to fetch messages');
            }
            const data = await response.json();
            setMessages(data); // Set the fetched messages in state
            console.log(messages);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };
    useEffect(() => {
        // Fetch every 0.5s
        const timerId = setInterval(fetchMessages, 500);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(timerId);
    }, []);
    return (
        <div>
            <h2>Messages</h2>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayMessage;