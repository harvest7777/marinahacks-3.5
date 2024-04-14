import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
// Component imports
import ChatRoom from './components/ChatRoom';
import ColorSelector from './components/ColorSelector';
import UserButton from './components/userbutton';
import MessageBox from './components/sendmessage';
import DisplayMessage from './components/displaymessages';
import MainUserSection from './components/MainUserSection';

import './assets/baskic8.css'

import './App.css';

function App() {
  return (
    // We will be putting all our react components here
    <Router>
      <Switch>
        <Route exact path='/'>
          <ChatRoom />
        </Route>
        <Route exact path='/chat'>
          <DisplayMessage />
          <MessageBox />
          <MainUserSection/>
        </Route>
        <Route exact path='/name'>
          <UserButton />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
