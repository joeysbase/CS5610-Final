import React, { useEffect, useState } from 'react';
import { getHighscores } from '../api/highscoreAPI';

const Scores = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    getHighscores().then(setScores);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>High Scores</h2>
      <ol>
        {scores.map(s => (
          <li key={s._id}>
            {s.gameId.name} | Completed by {s.completedBy.length} player(s)
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Scores;
