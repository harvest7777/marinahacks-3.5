import React, { useState } from 'react'
import DrawingCanvas from './DrawingCanvas'

function MainCard({tool, currentBrushSize}) {
    const [drawingData, setDrawingData] = useState(null);
    const [textData, setTextData] = useState('');
    const [currentColor, setCurrentColor] = useState('#FFF000');
    

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
    <DrawingCanvas onChange={handleDrawingChange} currentBrushSize={currentBrushSize} currentColor={currentColor}  currentTool={tool}/>
    </>
  )
}

export default MainCard