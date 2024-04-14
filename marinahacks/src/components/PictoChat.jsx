import React from 'react'
import MainUserSection from './MainUserSection';
import DisplayMessage from './displaymessages';

function PictoChat() {
  return (
    <section className='pictochat'>
        <DisplayMessage />
        <MainUserSection/>
    </section>
    
  )
}

export default PictoChat