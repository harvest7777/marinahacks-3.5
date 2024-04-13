import {
    useState
} from "react";
function UserButton() {
    const [textInput, setTextInput] = useState('');

    // Event handler to update the text input state
    const handleInputChange = (event) => {
        setTextInput(event.target.value);
    };

    // Event handler to save the text input
    const sendUsername = () => {
        const username = textInput
        fetch("/submit-username", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        })
    };

    return (
        <div>
            <input
                type="text"
                value={textInput}
                onChange={handleInputChange}
                placeholder="Enter text here"
            />
            <button onClick={sendUsername}>Send to db</button>
            <p>Your username: {textInput}</p>
        </div>
    );
}


export default UserButton;