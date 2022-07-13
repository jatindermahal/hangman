import React from 'react'
import './Figure.css'

import fig0 from '../assets/hangman00.png'
import fig1 from '../assets/hangman01.png'
import fig2 from '../assets/hangman02.png'
import fig3 from '../assets/hangman03.png'
import fig4 from '../assets/hangman04.png'
import fig5 from '../assets/hangman05.png'
import fig6 from '../assets/hangman06.png'

let figures = [fig6,fig5,fig4,fig3,fig2,fig1,fig0];


export default function Figure({triesLeft}) {
  
  return (
    <div className="col-lg-6 figure">
      <img src={figures[triesLeft]} alt="hangman"/>
    </div>
  )
}
