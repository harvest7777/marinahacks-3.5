import { useState, useEffect } from "react";
import '../App.css';
import './userbutton.css';


function UserButton() {
    const [textInput, setTextInput] = useState('');
    const [username, setUsername] = useState('')
    // Event handler to update the text input state
    const handleInputChange = (event) => {
        setTextInput(event.target.value);
    };

    // Event handler to save the text input
    const saveUsername = () => {
        if (textInput === '') {
            console.log('Empty username!');
            setUsername('Unnamed User');
        }
        else {
            setUsername(textInput);
        }
        sessionStorage.setItem('username', username);

    };

    useEffect(() => {
        sessionStorage.setItem('username', username);
    }, [username]);

    return (
        <div>
            <input
                type="text"
                maxLength={20}
                value={textInput}
                onChange={handleInputChange}
                placeholder="Enter text here"
            />
            <button onClick={saveUsername}>Save!</button>
            <p>Your username: {username}</p>
        </div>
    );
}


export default UserButton;