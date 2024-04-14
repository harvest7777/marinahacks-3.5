import React, { useState } from 'react'
import DrawingCanvas from './DrawingCanvas'

function MainCard({tool=1, currentBrushSize=5, handleDoClear=null, doClear=false, doSetLastImage=false, handleSetLastImage=null, color='#000000'}) {
    const [drawingData, setDrawingData] = useState(null);
    const [textData, setTextData] = useState('');
    const [currentColor, setCurrentColor] = useState(color);
    

    const handleDrawingChange = (newDrawing) => {
        localStorage.setItem('drawingData', newDrawing);
      };
    
    const handleTextChange = (event) => {
    setTextData(event.target.value);
    };

    const handleColorChange = (color) => {
    setCurrentColor(color);
    };

    
  return (
    <>
      <div className = 'drawing-container'>
        <p>{localStorage.getItem('username')}</p>
        <DrawingCanvas onChange={handleDrawingChange} currentBrushSize={currentBrushSize} currentColor={currentColor}  currentTool={tool} handleDoClear={handleDoClear} doClear={doClear} doSetLastImage={doSetLastImage} handleSetLastImage={handleSetLastImage} />
      </div>
    </>
  )
}

export default MainCard