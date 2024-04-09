import React, { useState } from 'react';
import './App.css';

const movies = [
  { name: "Luffy", emoji: "🍖🍗🍜" },
  { name: "Zoro", emoji: "⚔️🍺🤺" },
  { name: "Nami", emoji: "🌩️🗺️💰" },
  { name: "Usopp", emoji: "🏹🔭🧢" },
  { name: "Sanji", emoji: "🍛🔥🚬" },
  { name: "Tony Tony Chopper", emoji: "🦌💊🍵" },
  { name: "Nico Robin", emoji: "📚🌸🔒" },
  { name: "Franky", emoji: "🔩🔥🚂" },
  { name: "Brook", emoji: "💀🎻🎩" },
  { name: "Jinbe", emoji: "🌊🦈🤝" },
  { name: "Law", emoji: "💊⚖️💉" },
  { name: "Portgas Ace", emoji: "🔥👒🚢" },
  { name: "Boa Hancock", emoji: "💘🐍🏹" },
  { name: "Shanks", emoji: "🍺🏴‍☠️🔴🗡️" },
  { name: "Edward Newgate (Whitebeard)", emoji: "⚓🔱💪" }, 
  { name: "Donquixote Doflamingo", emoji: "🎩💰🔫" },
  { name: "Charlotte Katakuri", emoji: "🍩🥊🍘" }
  ];
const App = () => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const currentMovie = movies[currentMovieIndex];

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const checkAnswer = () => {
    const userInputLowerCase = userInput.toLowerCase();
    const movieNameLowerCase = currentMovie.name.toLowerCase();
    if (userInputLowerCase === movieNameLowerCase) {
      setScore(score + 1);
      setCurrentMovieIndex(currentMovieIndex + 1);
      setUserInput('');
      if (currentMovieIndex === movies.length - 1) {
        // El usuario ha ganado el juego
        setGameOver(true);
      }
    } else {
      setLives(lives - 1);
      if (lives === 1) {
        // El usuario ha perdido todas las vidas
        setGameOver(true);
      }
    }
  };

  const restartGame = () => {
    setScore(0);
    setLives(3);
    setCurrentMovieIndex(0);
    setUserInput('');
    setGameOver(false);
  };

  return (
    <div className="App">
      <h1>Adivina el personaje de One piece</h1>
      <div className="score">Puntaje: {score}</div>
      <div className="lives">Vidas: {lives}</div>
      {gameOver ? (
        <div className="game-over">
          {score === movies.length ? (
            <div>
              <h2>¡Felicidades mi amor, has ganado!</h2>
              <button onClick={restartGame}>Jugar de nuevo</button>
            </div>
          ) : (
            <div>
              <h2>¡perdidiste todas las vidas bebe :c !</h2>
              <button onClick={restartGame}>Intenta, tu puedes</button>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="movie-title">
            {currentMovie.emoji}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Escribe el nombre del personaje"
            />
            <button onClick={checkAnswer}>Adivinar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
