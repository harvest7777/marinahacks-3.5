import { useState, useEffect } from "react";


function MessageBox() {
    const [textInput, setTextInput] = useState('');
    const [message, setMessage] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date());

    const handleInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const sendMessage = () => {
        const username = localStorage.getItem('username');
        const room = localStorage.getItem('room'); // Assuming the room is stored in localStorage
        const timestamp = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
        console.log(timestamp, "-", username, ":", message)
        fetch("/send-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                timestamp,
                username,
                message,
                room, //room!
            })
        })
    }

    useEffect(() => {
        setMessage(textInput);
    }, [textInput]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every 1000 milliseconds (1 second)

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

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
            <p>Your message: {message}</p>
        </div>
    );
}


export default MessageBox;