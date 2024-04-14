import React, { useState } from 'react'
import DrawingCanvas from './DrawingCanvas'

function MainCard({tool, currentBrushSize, handleDoClear, doClear}) {
    const [drawingData, setDrawingData] = useState(null);
    const [textData, setTextData] = useState('');
    const [currentColor, setCurrentColor] = useState('#000000');
    

    const handleDrawingChange = (newDrawing) => {
        setDrawingData(newDrawing);
      };
    
    const handleTextChange = (event) => {
    setTextData(event.target.value);
    };

    const handleColorChange = (color) => {
    setCurrentColor(color);
    };

    
  return (
    <>
    <p>{localStorage.getItem('username')}</p>
    <DrawingCanvas onChange={handleDrawingChange} currentBrushSize={currentBrushSize} currentColor={currentColor}  currentTool={tool} handleDoClear={handleDoClear} doClear={doClear}/>
    </>
  )
}

export default MainCard