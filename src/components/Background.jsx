import { useState, useEffect } from "react";

function randomChar() {
  let digits = "01";
  let randomIndex = Math.floor(Math.random() * digits.length);
  return digits[randomIndex];
}

function randomizeChars() {
  let chars;
  for (let i = 0; i < 20000; i++) {
    chars += randomChar();
  }
  return chars;
}

const Background = () => {
  let [digits, setDigits] = useState(randomizeChars());

  useEffect(() => {
    let interval = setInterval(() => {
      setDigits(randomizeChars());
      return () => clearInterval(interval);
    }, 1000);
  }, []);

  return (
    <div className="fixed w-screen h-screen break-words opacity-[0.05] pointer-events-none background-text z-[-1]">
      {digits}
    </div>
  );
};

export default Background;
