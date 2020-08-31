import React, { useEffect } from "react";
import { useHangman } from "../../hooks/useHangman/useHangman";

const HiddenWord = () => {
  const { state } = useHangman();
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div>
      <p>Hidden word: {state.word}</p>
      <p>Word: {state.answer}</p>
    </div>
  );
};

export default HiddenWord;
