import React, { useState } from 'react';
import index from '../index.css';
import Header from './Header';
import Button from './InteractBut';
import ImageA from './final_straw.png';
import ImageB from './cream.png';
import ImageC from './cross.png';
import ImageD from './donut.png';

function ChatRoom() {
  const count = 1; // Ignore this

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
        <Header title="Chat Room A" num="01" imgSrc={ImageA} />
        <Header title="Chat Room B" num="02" imgSrc={ImageB} />
        <Header title="Chat Room C" num="03" imgSrc={ImageC} />
        <Header title="Chat Room D" num="04" imgSrc={ImageD} />
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
