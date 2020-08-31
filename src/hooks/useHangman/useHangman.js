import { useState } from "react";

export const useHangman = () => {
  const words = [
    "Snickers",
    "KitKat",
    "AlmondJoy",
    "Reeses",
    "Crunch",
    "Payday",
    "BabyRuth",
    "Twix",
    "MilkyWay"
  ];
  const randomWord = () => {
    return words[Math.floor(Math.random() * words.length)].toLowerCase();
  };
  const [state, setState] = useState({
    mistake: 0,
    guessed: new Set([]),
    answer: randomWord()
  });

  return { state, setState, randomWord };
};
