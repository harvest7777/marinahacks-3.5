import { useState, useEffect } from "react";
import lastImage from '../assets/upload.png';

function MessageBox() {
    const [currentTime, setCurrentTime] = useState(new Date());

    const sendMessage = () => {
        const message = localStorage.getItem('drawingData');
        const username = localStorage.getItem('username');
        const timestamp = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
        const room = 1
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
                room,
            })
        })
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every 1000 milliseconds (1 second)

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <input className = "tool" src={lastImage} type='image' onClick={sendMessage}></input>
        </div>
    );
}


export default MessageBox;