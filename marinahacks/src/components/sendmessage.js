import { useState } from "react";

function MessageBox() {
    const [textInput, setTextInput] = useState('');

    const handleInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const sendMessage = () => {
        const username = localStorage.getItem('username');
        const room = localStorage.getItem('room'); // Ensure room is correctly managed in localStorage
        const currentTime = new Date(); // Moved here to capture exact send time
        const timestamp = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
        console.log(timestamp, "-", username, ":", textInput); // Logging for debug

        fetch("/send-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                timestamp,
                username,
                message: textInput,
                room,
            })
        }).then(() => {
            setTextInput(''); // Clear the input field after sending
        }).catch(err => {
            console.error('Failed to send message:', err);
        });
    }

    return (
        <div>
            <input
                type="text"
                maxLength={500}
                value={textInput}
                onChange={handleInputChange}
                placeholder="Enter your message here"
            />
            <button onClick={sendMessage}>Send!</button>
            <p>Your message: {textInput}</p> {/* Changed from message to textInput to reflect live input */}
        </div>
    );
}

export default MessageBox;
//Direct State Update: The textInput state is directly updated via handleInputChange which then gets used as the message to send.
//Immediate Timestamp: Timestamp generation happens immediately before sending to ensure accuracy.
//Input Clearing: The input field is cleared once the message is successfully sent.