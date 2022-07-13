import React from 'react'
import './Button.css'

const generateButtons = (string,guessedLetters,handleClick,gameOver)=>{
    return string.split("").map(alphabet => {
        return (
            <button 
                className='btn m-2 keys col'
                key={alphabet}
                onClick={handleClick}
                value={alphabet}
                disabled={gameOver ? true : guessedLetters.includes(alphabet)}
            >{alphabet}</button>
        )
    })
}

export default function Button({guessedLetters,handleClick,gameOver}) {
  return (
    <div className='container'>

        <div className='row'>
        {
            generateButtons("qwertyuiopasdfghjklzxcvbnm",guessedLetters,handleClick,gameOver)
        }
        </div>
    </div>
  )
}
