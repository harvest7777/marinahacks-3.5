import React from 'react'
import Button from './InteractBut'
import ColorBut from './ColorBut'

const colors = ['#000000', '#9D9D9D', '#F9EFFF', '#BE2633', '#E06F8B', '#493C2B', '#A46422', '#EB8931', '#EB8931', '#796C9B', '#44891A', '#A3CE27', '#1B2632', '#005784', '#31A2F2', '#B2DCEF']; // Array of colors
const ColorSelector = () => {
  return (
    <>
    <div className = "page-head">
      <h1>Select your favorite color.</h1>

    </div>

    <div className = 'color-container-region'>
        <div className = 'color-selection'>
            <div className = "colors">
                {colors.map((color, index) => (
                    <ColorBut key={index} color={color} /> // Pass color to each ColorBut
                ))}
            </div>
        </div>

        <div className = 'favorite-selection'>
            <header>Choose Color</header>
            <div className = 'choosen-color'></div>

        </div>
    </div>

    <div className = "page-foot">
      <div className="join-goback">
      
      <div className="btn-container-out">
        <a href="/" className="btn-container-in">
          <h1 className="btn-text">Cancel</h1>
        </a>
       </div>

       <div className="btn-container-out">
        <a href="/join" className="btn-container-in">
          <h1 className="btn-text">Confirm</h1>
        </a>
       </div>


      </div>
    </div>
    </>
  )
}

export default ColorSelector