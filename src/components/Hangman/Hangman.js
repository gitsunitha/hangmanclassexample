import React from "react";
import HiddenWord from "../HiddenWord/HiddenWord";
import Score from "../Score/Score";
import Buttons from "../Buttons/Buttons";
import { useHangman } from "../../hooks/useHangman/useHangman";

const Hangman = () => {
  const { state, setState, randomWord } = useHangman();
  const handleGuess = (e) => {
    let letter = e.target.value;
    setState({
      ...state,
      guessed: state.guessed.add(letter),
      mistake: state.mistake + (state.answer.includes(letter) ? 0 : 1)
    });
  };

  const guessedWord = () => {
    return state.answer
      .split("")
      .map((letter) => (state.guessed.has(letter) ? letter : " _ "));
  };

  const generateButtons = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        className="btn btn-lg btn-primary m-2"
        key={letter}
        value={letter}
        onClick={handleGuess}
        disabled={state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  };
  const resetButton = () => {
    setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    });
  };

  const gameOver = state.mistake >= 5;
  const isWinner = guessedWord().join("") === state.answer;
  let gameStat = generateButtons();

  if (isWinner) {
    gameStat = "You Won!!!";
  }

  if (gameOver) {
    gameStat = "You Lost!!!";
  }

  return (
    <div className="container">
      <div className="Hangman container">
        <h1 className="text-center">Hangman</h1>
        <div className="float-right">Wrong Guesses: {state.mistake} of 5</div>

        <div className="text-center">
          <p>Guess the Candy:</p>
          <p>{!gameOver ? guessedWord() : state.answer}</p>
          <p>{gameStat}</p>
          <button className="btn btn-info" onClick={resetButton}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hangman;
