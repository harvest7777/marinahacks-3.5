import React, { useState, useEffect } from 'react';
import UserButton from './username/userbutton';
import MessageBox from './sendmessage/sendmessage';
import DisplayMessage from './displaymessages/displaymessages';
import MainCard from './components/MainCard';
import Tools from './components/Tools';
import './assets/baskic8.css'
import './App.css';
function App() {
  // This is just an example of how you would access an API endpoint
  // DO NOT actually access them all in app, it should be accessed within a react component this is just an example
  const [data, setData] = useState();
  const [currentTool, setCurrentTool] = useState(0); //0 is pencil 1 is eraser
  const [currentBrushSize, setCurrentBrushSize] = useState(5);

  useEffect(() => {
    fetch("/test")
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []);
  // DO NOT ACCESS API ENDPOINTS IN APP.JS THIS IS JUST AN EXAMPLE
    const handleCurrentTool = (currenTool) => {
      setCurrentTool(currenTool)
    }
    const handleBrushChange = (size) => {
      setCurrentBrushSize(size);
    };
  return (
    // We will be putting all our react components here
    <div>
      <UserButton />
      <DisplayMessage />
      <MessageBox />
      <Tools tool={handleCurrentTool} brushSize={handleBrushChange}/>
      <MainCard tool={currentTool} currentBrushSize={currentBrushSize}/>
    </div>
  );
}

export default App;
