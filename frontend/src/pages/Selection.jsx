import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGames, createGame } from '../api/sudokuAPI';

const Selection = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshGames();
  }, []);

  const refreshGames = () => {
    getGames().then(setGames);
  };

  const handleCreate = (difficulty) => {
    // if (!username) return alert('Please login first!');
    createGame(difficulty, "user1").then(res => {
      navigate(`/game/${res.gameId}`);
    });
  };

  return (
    <div className="page-card">
      <h2>Select or Create a Game</h2>
      <button onClick={() => handleCreate('NORMAL')}>Sudoku — Easy</button>
      <button onClick={() => handleCreate('EASY')}>Sudoku — Normal</button>
      <h3>Existing Games</h3>
      <ul>
        {games.map(g => (
          <li key={g._id}>
            <button onClick={() => navigate(`/game/${g._id}`)}>
              {g.name} | {g.difficulty} | {g.creator} | {new Date(g.date).toLocaleDateString()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selection;
