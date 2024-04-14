import React, {useState} from 'react'

const DEFAULT_LAYOUTS = {
    QWERTY: [
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'backspace'],
      ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'enter'],
      ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
    ],
    NUMERIC: [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['0']
    ]
  };

function Keyboard() {
  return (
    <div>Keyboard</div>
  )
}

export default Keyboard