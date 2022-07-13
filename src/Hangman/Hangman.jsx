import React, { useEffect, useState } from "react";

import Button from "../Buttons/Button";
import Figure from "../Figure/Figure";
import ShowModal from "../Modal/ShowModal";
import { getRandomWord } from "../Word/Word";

import "./Hangman.css";

export default function Hangman() {
  const [triesLeft, setTriesLeft] = useState(6);
  const [guessed, setGuessed] = useState([]);
  const [word, setWord] = useState("java");

  useEffect(() => {
    if (triesLeft === 6) {
      setGuessed([]);
      setWord(getRandomWord());
    }
  }, [triesLeft]);

  const handleClick = (e) => {
    setGuessed([...guessed, e.target.value]);
    if (word.includes(e.target.value)) {
    } else {
      if (triesLeft !== 0) setTriesLeft(triesLeft - 1);
    }
  };

  const guessWord = () => {
    return word
      .split("")
      .map((alphabet) =>
        guessed.includes(alphabet) ? ` ${alphabet} ` : " _ "
      );
  };

  const reset = () => {
    setTriesLeft(6);
    setGuessed([]);
    setWord(getRandomWord());
  };

  return (
    <div className="container">
      <p id="movesRem" className="mb-5">Moves remaining: {triesLeft}</p>
      <div className="row">
          <Figure triesLeft={triesLeft} />

        {triesLeft <= 0 ? (
          <>
            <div className="col-lg-6 text-center keypad">
              <h3>Game Over!</h3>
              <p>The answer was <strong>{word}</strong></p>
              <Button
                gameOver={true}
                guessedLetters={guessed}
                handleClick={handleClick}
              />
            </div>
            <ShowModal
              title="Game Over!"
              body={
                <p style={{ fontSize: "larger" }}>
                  <span>BETTER LUCK NEXT TIME</span>
                  <br /> The correct word was <strong>{word}</strong>
                </p>
              }
              reset={reset}
            />
          </>
        ) : guessWord().includes(" _ ") ? (
          <div className="col-lg-6 text-center keypad">
            <h2>Guess me</h2>
            <h3 className="mb-3">{guessWord()}</h3>
            <Button guessedLetters={guessed} handleClick={handleClick} />
          </div>
        ) : (
          <>
            <div className="col-lg-6 text-center keypad">
              <h3>You Won 🎉</h3>
              <p>You correctly guessed the word "{word}"</p>
              <Button
                gameOver={true}
                guessedLetters={guessed}
                handleClick={handleClick}
              />
            </div>
            <ShowModal
              title="Congrats 🥳🎉"
              body="You did good. Try a new challenge by clicking play again button."
              reset={reset}
            />
          </>
        )}

        <br />

      </div>
        <button
          className="btn btn-lg reset"
          onClick={() => {
            reset();
          }}
        >
          Play Again
        </button>
    </div>
  );
}
