import React from 'react';
import Header from './Header';
import Button from './InteractBut';
import ImageA from './final_straw.png';
import ImageB from './cream.png';
import ImageC from './cross.png';
import ImageD from './donut.png';
import index from '../index.css'

function ChatRoom() {
  const count = 1; // Ignore this


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
          <Button text="Back" />
          <Button text="Join" />
        </div>
      </div>
    </>
  );
}

export default ChatRoom;
