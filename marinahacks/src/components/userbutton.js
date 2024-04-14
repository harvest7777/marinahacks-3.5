import { useState, useEffect } from "react";
import '../App.css';
import './userbutton.css';


function UserButton() {
  const [textInput, setTextInput] = useState('');
  const [username, setUsername] = useState(localStorage.getItem('username'))
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
    localStorage.setItem('username', username);

  };

  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);

  return (
    <>
      <div className="page-head">
        <h1>Select your username.</h1>

      </div>

      <div className='container-region'>
        <input
          className='name-selection'
          type="text"
          maxLength={20}
          value={textInput}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />



        <div className="btn-container-out">
          <div className="btn-container-in" onClick={saveUsername} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>
            <h1 className="btn-text">Save</h1>
          </div>

        </div>

      </div>


      <div className="page-foot">
        <div className="join-goback">

          <div className="btn-container-out">
            <a href="/" className="btn-container-in">
              <h1 className="btn-text">Cancel</h1>
            </a>
          </div>

          <div className="btn-container-out">
            <a href="/color" className="btn-container-in">
              <h1 className="btn-text">Confirm</h1>
            </a>
          </div>


        </div>
      </div>
    </>
  )
}


export default UserButton;