import React from "react";
import "./styles.css";
import Hangman from "./components/Hangman/Hangman";
import { useHangman } from "./hooks/useHangman/useHangman";
import { HangmanProvider } from "./context";

export default function App() {
  const hangman = useHangman();
  return (
    <HangmanProvider value={hangman}>
      <Hangman />
    </HangmanProvider>
  );
}
