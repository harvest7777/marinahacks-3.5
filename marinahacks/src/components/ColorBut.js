import React from 'react'

function ColorBut({color, handleBackgroundColor}) {

  return (
    <button onClick={() => {localStorage.setItem('userColor', color)
    handleBackgroundColor(color)}} className = 'colours' style = {{background: color}}>
    </button>
  )
}

export default ColorBut