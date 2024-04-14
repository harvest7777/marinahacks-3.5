import React from 'react'

import eraser from '../assets/eraser.png';
import pencil from '../assets/pencil.png';
import brushLarge from '../assets/brush_large.png';
import brushMedium from '../assets/brush_medium.png';
import brushSmall from '../assets/brush_small.png';
import clearCard from '../assets/clean.png';
import MessageBox from './sendmessage';

function Tools({ tool, brushSize, handleDoClear, handleSetLastImage }) {
  return (
    <>
    <div className = "tool-container">
    <MessageBox />
    {/* <input className = "tool" src={lastImage} onClick={() => handleSetLastImage(true)} type='image' alt='clear card' /> */}
    <input className = "tool" src={eraser} onClick={() => tool(1)} type='image' alt='eraser' />
    <input className = "tool" src={pencil} onClick={() => tool(0)} type='image' alt='pencil' />
    <input className = "tool" src={brushLarge} onClick={() => brushSize(12)} type='image' alt='big brush' />
    <input className = "tool" src={brushMedium} onClick={() => brushSize(5)} type='image' alt='medium brush' />
    <input className = "tool" src={brushSmall} onClick={() => brushSize(1)} type='image' alt='small brush' />
    <input className = "tool" src={clearCard} onClick={() => handleDoClear(true)} type='image' alt='clear card' />
    </div>
    </>

  )
}

export default Tools;