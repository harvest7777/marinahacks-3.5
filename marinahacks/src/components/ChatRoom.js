import React, { useState } from 'react';
import index from '../index.css';
import Header from './Header';
import Button from './InteractBut';
import ImageA from './final_straw.png';
import ImageB from './cream.png';
import ImageC from './cross.png';
import ImageD from './donut.png';
import { useHistory } from 'react-router-dom';

function ChatRoom() {
  const history = useHistory();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    console.log('Room selected:', room); // This should log when a room is clicked
    // Here you can add confirmation logic if needed
  }

  const handleJoin = () => {
    if (selectedRoom) {
      console.log('hehe');
      // Use the `history.push` method to navigate to the chat room path like /chatA, /chatB, etc.
      history.push(`/chat${selectedRoom}`);
    } else {
      // Alert the user if no chat room has been selected
      alert('Please select a chat room first!');
      console.log('hehe');
    }
  }

  return (
    <>
      <div className="page-head">
        <h1>Choose a Chat Room to join.</h1>
      </div>
  <div className="container">
        <div onClick={() => handleRoomSelect('A')}>
          <Header title="Chat Room A" num="01" imgSrc={ImageA} />
        </div>
        <div onClick={() => handleRoomSelect('B')}>
          <Header title="Chat Room B" num="00" imgSrc={ImageB} />
        </div>
        <div onClick={() => handleRoomSelect('C')}>
          <Header title="Chat Room C" num="00" imgSrc={ImageC} />
        </div>
        <div onClick={() => handleRoomSelect('D')}>
          <Header title="Chat Room D" num="00" imgSrc={ImageD} />
        </div>
      </div>

      <div className="page-foot">
        <div className="join-goback">
          {/* Assuming the Button component can take an onClick prop */}

          <div className="btn-container-out">
        <a href="/color" className="btn-container-in">
          <h1 className="btn-text">Back</h1>
        </a>
       </div>

  
       <div className="btn-container-out">
  <button className="btn-container-in" onClick={handleJoin}>Join</button>
</div>

       
        </div>
      </div>
    </>
  );
}

export default ChatRoom;