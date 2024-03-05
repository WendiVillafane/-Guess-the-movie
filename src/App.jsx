import React, { useState } from 'react';
import './App.css';

const movies = [
  { name: "Forrest Gump", emoji: "🏃🍫🍤" },
  { name: "The Matrix", emoji: "🕶️💊👽" },
  { name: "Titanic", emoji: "🚢❄️💔" },
  { name: "Jurassic Park", emoji: "🦖🌴🚙" },
  { name: "The Lion King", emoji: "🦁👑🌅" },
  { name: "Star Wars", emoji: "⚔️🚀🌌" },
  { name: "The Avengers", emoji: "🦸‍♂️🦸‍♀️💥" },
  { name: "Harry Potter", emoji: "⚡🧙‍♂️🔮" },
  { name: "The Terminator", emoji: "🤖🔫🕶️" },
  { name: "Indiana Jones", emoji: "🤠🔍💎" },
  { name: "The Godfather", emoji: "🍕🤵🔫" },
  { name: "The Dark Knight", emoji: "🦇♞👨‍🦯" },
  { name: "Inception", emoji: "🌀👩‍🚀🎩" },
  { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
  ];
const App = () => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
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
      <h1>Adivina la película con emoji</h1>
      <div className="score">Puntaje: {score}</div>
      <div className="lives">Vidas: {lives}</div>
      {gameOver ? (
        <div className="game-over">
          {score === movies.length ? (
            <div>
              <h2>¡Felicidades, has ganado!</h2>
              <button onClick={restartGame}>Jugar de nuevo</button>
            </div>
          ) : (
            <div>
              <h2>¡Has perdido todas las vidas!</h2>
              <button onClick={restartGame}>Intentar de nuevo</button>
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
              placeholder="Escribe el nombre de la película"
            />
            <button onClick={checkAnswer}>Adivinar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
