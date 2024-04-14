import MainCard from './MainCard';
import Tools from './Tools';
import React, {useState} from 'react'


function MainUserSection() {
    const [currentTool, setCurrentTool] = useState(0); //0 is pencil 1 is eraser
    const [currentBrushSize, setCurrentBrushSize] = useState(5);
    const [doClear, setDoClear] = useState(false);
    const [doSetLastImage, setDoSetLastImage] = useState(false);

    const handleCurrentTool = (currenTool) => {
    setCurrentTool(currenTool)
  }
  const handleBrushChange = (size) => {
    setCurrentBrushSize(size);
  };
  const handleDoClear = (doClear) => {
    setDoClear(doClear);
  };
  const handleSetLastImage = (doSetLastImage) => {
    setDoSetLastImage(doSetLastImage)
  }
  return (
    <>
    <div className = 'main-drawing-container'>
      <Tools tool={handleCurrentTool} brushSize={handleBrushChange} handleDoClear={handleDoClear} handleSetLastImage={handleSetLastImage}/>
      <MainCard tool={currentTool} currentBrushSize={currentBrushSize} handleDoClear={handleDoClear} doClear={doClear} doSetLastImage={doSetLastImage} handleSetLastImage={handleSetLastImage} color={localStorage.getItem('userColor')} />
    </div>
    </>
  )
}

export default MainUserSection