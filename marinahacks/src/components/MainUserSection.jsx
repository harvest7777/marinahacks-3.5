import MainCard from './MainCard';
import Tools from './Tools';
import React, {useState} from 'react'


function MainUserSection() {
    const [currentTool, setCurrentTool] = useState(0); //0 is pencil 1 is eraser
    const [currentBrushSize, setCurrentBrushSize] = useState(5);
    const [doClear, setDoClear] = useState(false);
    const handleCurrentTool = (currenTool) => {
    setCurrentTool(currenTool)
  }
  const handleBrushChange = (size) => {
    setCurrentBrushSize(size);
  };
  const handleDoClear = (doClear) => {
    setDoClear(doClear);
  };
  return (
    <>
    <Tools tool={handleCurrentTool} brushSize={handleBrushChange} handleDoClear={handleDoClear}/>
    <MainCard tool={currentTool} currentBrushSize={currentBrushSize} handleDoClear={handleDoClear} doClear={doClear}/>
    </>
  )
}

export default MainUserSection