import React, { useEffect } from "react";
import { useHangman } from "../../hooks/useHangman/useHangman";

const Buttons = () => {
  const { setState, state } = useHangman();
  const handleButtonClick = (e) => {
    const letter = e.target.value;
    const updatedAnswer = state.word
      .split("")
      .map((l) => {
        return state.guessed.indexOf(l) > -1 ? l : "_";
      })
      .join("");
    setState({
      ...state,
      guessed: [...state.guessed, letter],
      answer: updatedAnswer
    });
  };

  return (
    <>
      {"qwertyuiopasdfghjklzxcvbnm".split("").map((b) => (
        <button
          className="btn btn-primary"
          key={b}
          type="button"
          value={b}
          onClick={handleButtonClick}
          disabled={state.guessed.indexOf(b) > -1}
        >
          {b}
        </button>
      ))}
    </>
  );
};

export default Buttons;
