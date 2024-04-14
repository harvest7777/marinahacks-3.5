import React, { useState, useEffect } from 'react';
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
    </div>
  );
}

export default App;
