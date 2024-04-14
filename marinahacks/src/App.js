import React, { useState, useEffect, Component } from 'react';
import ChatRoom from './components/ChatRoom';
import ColorSelector from './components/ColorSelector';
import UserButton from './components/userbutton';
import MessageBox from './components/sendmessage';
import DisplayMessage from './components/displaymessages';
import './assets/baskic8.css'
import './App.css';
function App() {
  return (
    // We will be putting all our react components here
    <div>
      <UserButton />
      <DisplayMessage />
      <MessageBox />
      <ColorSelectors/>
      <ChatRoom/>
    </div>
  );
}

export default App;
