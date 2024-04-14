import React, { useState, useEffect } from 'react';
import ChatRoom from './components/ChatRoom';
import ColorSelector from './components/ColorSelector';
import UserButton from './username/userbutton';
import MessageBox from './sendmessage/sendmessage';
import DisplayMessage from './displaymessages/displaymessages';
import MainUserSection from './components/MainUserSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/baskic8.css'
import './App.css';
function App() {
  // This is just an example of how you would access an API endpoint
  // DO NOT actually access them all in app, it should be accessed within a react component this is just an example
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/test")
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []);
  // DO NOT ACCESS API ENDPOINTS IN APP.JS THIS IS JUST AN EXAMPLE
    

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
