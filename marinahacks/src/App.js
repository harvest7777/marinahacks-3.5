import React, { useState, useEffect } from 'react';
import ChatRoom from './components/ChatRoom';
import ColorSelector from './components/ColorSelector';
import UserButton from './components/userbutton';
import MessageBox from './components/sendmessage';
import DisplayMessage from './components/displaymessages';
import MainUserSection from './components/MainUserSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/baskic8.css'
import './App.css';

function App() {
  return (
    // We will be putting all our react components here
    <div>
      <UserButton />
      <DisplayMessage />
      <MessageBox />
      <MainUserSection />
    </div>
  );
}

export default App;
