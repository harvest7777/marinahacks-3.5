import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
// Component imports
import ChatRoom from './components/ChatRoom';
import ColorSelector from './components/ColorSelector';
import UserButton from './components/userbutton';
import MessageBox from './components/sendmessage';
import DisplayMessage from './components/displaymessages';
import MainUserSection from './components/MainUserSection';
import ChatRoomA from './components/chatRooms/ChatRoomA';
import ChatRoomB from './components/chatRooms/ChatRoomB';
import ChatRoomC from './components/chatRooms/ChatRoomC';
import ChatRoomD from './components/chatRooms/ChatRoomD';

import './assets/baskic8.css'

import './App.css';

function App() {
  return (
    // We will be putting all our react components here
    <Router>
      <Switch>
        
        <Route exact path='/'>
          <UserButton />
        </Route>

        <Route exact path='/color'>
         <ColorSelector/>
        </Route>

        <Route exact path='/join'>
             <ChatRoom />
        </Route>

        <Route exact path='/chat'>
          <DisplayMessage />
          <MessageBox />
          <MainUserSection/>
        </Route>
        <Route path="/chatA" component={ChatRoomA}>
          <DisplayMessage />
          <MessageBox />
          <MainUserSection/>
        </Route>
        <Route path="/chatB" component={ChatRoomB}>
          <DisplayMessage />
          <MessageBox />
          <MainUserSection/>
        </Route>
        <Route path="/chatC" component={ChatRoomC}>
          <DisplayMessage />
          <MessageBox />
          <MainUserSection/>
        </Route>
        <Route path="/chatD" component={ChatRoomD}>
          <DisplayMessage />
          <MessageBox />
          <MainUserSection/>
        </Route>
        
      </Switch>
    </Router>

  );
}

export default App;
