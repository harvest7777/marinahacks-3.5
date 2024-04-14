import React from 'react'
import index from '../index.css'
import Header from './Header'
import Button from './InteractBut'
import ImageA from './final_straw.png';
import ImageB from './cream.png';
import ImageC from './cross.png';
import ImageD from './donut.png';

function ChatRoom() {
  const count = 1 //ignore this
  return (
    <>
    <div className = "page-head">
      <h1>Choose a Chat Room to join.</h1>

    </div>
    <div className="container">
      <Header title = "Chat Room A" num = "01" imgSrc = {ImageA}/> 
      <Header title = "Chat Room B" num = "00" imgSrc = {ImageB}/> 
      <Header title = "Chat Room C" num = "00" imgSrc = {ImageC}/> 
      <Header title = "Chat Room D" num = "00" imgSrc = {ImageD}/> 
      {/*^^ This is for the Chatroom Box Container */}
    </div>

    <div className = "page-foot">
      <div className="join-goback">
        <Button text = "Back" /> 
        <Button text = "Join" /> 
      </div>
    </div>
    </>
  )
}

export default ChatRoom
