import React, { useState } from 'react';
import index from '../index.css';
import Header from './Header';
import Button from './InteractBut';
import ImageA from './final_straw.png';
import ImageB from './cream.png';
import ImageC from './cross.png';
import ImageD from './donut.png';

function ChatRoom() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  
  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    // Here you can add confirmation logic if needed
  }

  const handleJoin = () => {
    if (selectedRoom) {
      // Redirect to the chatroom page, replace "#" with your actual routing logic or path
      window.location.href = `/#${selectedRoom}`;
    } else {
      alert('Please select a chat room first!');
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
          <Header title="Chat Room B" num="02" imgSrc={ImageB} />
        </div>
        <div onClick={() => handleRoomSelect('C')}>
          <Header title="Chat Room C" num="03" imgSrc={ImageC} />
        </div>
        <div onClick={() => handleRoomSelect('D')}>
          <Header title="Chat Room D" num="04" imgSrc={ImageD} />
        </div>
        {/* ^^ This is for the Chatroom Box Container */}
      </div>

      <div className="page-foot">
        <div className="join-goback">
          {/* Assuming the Button component can take an onClick prop */}
          <Button text="Back" onClick={() => { /* Add your back logic here */ }} />
          <Button text="Join" onClick={handleJoin} />
        </div>
      </div>
    </>
  );
}

export default ChatRoom;
