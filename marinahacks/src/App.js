import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import ChatRoom from './components/ChatRoom';
import ColorSelector from './components/ColorSelector';
import UserButton from './components/userbutton';
import MessageBox from './components/sendmessage';
import DisplayMessage from './components/displaymessages';
import MainUserSection from './components/MainUserSection';

// Styles
import './assets/baskic8.css';
import './App.css';

function App() {
  // State to store API data
  const [data, setData] = useState();

  // Effect for fetching API data
  useEffect(() => {
    // Reminder: Move this API call to a more appropriate component or use a context/provider if necessary
    fetch("/test")
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {/* Components rendering */}
      <UserButton />
      <DisplayMessage />
      <MessageBox />
      <MainUserSection />

      {/* Router Setup (assuming you will use it later) */}
      <Router>
        <Routes>
          {/* Example Route: <Route path="/chat" element={<ChatRoom />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
