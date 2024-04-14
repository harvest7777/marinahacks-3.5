import React from 'react'

function Tools( {tool, brushSize} ) {
  return (
    <>
    <input src="../assets/eraser.png" onClick={() => tool(1)}type='image' alt='eraser'></input>
    <input src="../assets/pencil.png" onClick={() => tool(0)}type='image' alt='pencil'></input>
    <input src="../assets/brush_large.png" onClick={() => brushSize(12)}type='image' alt='big brush'></input>
    <input src="../assets/brush_medium.png" onClick={() => brushSize(5)}type='image' alt='medium brush'></input>
    <input type="image" src="../assets/brush_small.png" onClick={() => brushSize(1)} alt='small brush'></input>
    </>
  )
}

export default Tools