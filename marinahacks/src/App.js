import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
// Component imports
import ChatRoom from './components/ChatRoom';
import ColorSelector from './components/ColorSelector';
import UserButton from './components/userbutton';
import PictoChat from './components/PictoChat';

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
          <PictoChat />
        </Route>
        
      </Switch>
    </Router>

  );
}

export default App;
