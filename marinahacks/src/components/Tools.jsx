import React from 'react'

import eraser from '../assets/eraser.png';
import pencil from '../assets/pencil.png';
import brushLarge from '../assets/brush_large.png';
import brushMedium from '../assets/brush_medium.png';
import brushSmall from '../assets/brush_small.png';
import clearCard from '../assets/clean.png';
import lastImage from '../assets/upload.png';

function Tools({ tool, brushSize, handleDoClear, handleSetLastImage }) {
  return (
    <>
      <input src={eraser} onClick={() => tool(1)} type='image' alt='eraser' />
      <input src={pencil} onClick={() => tool(0)} type='image' alt='pencil' />
      <input src={brushLarge} onClick={() => brushSize(12)} type='image' alt='big brush' />
      <input src={brushMedium} onClick={() => brushSize(5)} type='image' alt='medium brush' />
      <input src={brushSmall} onClick={() => brushSize(1)} type='image' alt='small brush' />
      <input src={clearCard} onClick={() => handleDoClear(true)} type='image' alt='clear card' />
      <input src={lastImage} onClick={() => handleSetLastImage(true)} type='image' alt='clear card' />
    </>
  )
}

export default Tools;