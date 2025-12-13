import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGames } from '../api/sudokuAPI';
import { postHighscore, getHighscoreByGame } from '../api/highscoreAPI';
import GameBoard from '../components/GameBoard';
import NewResetBar from '../components/NewResetBar';
import { SudokuContext } from '../sudoku/SudokuContext'

const Game = ({ username }) => {
    const { gameId } = useParams();
    const [game, setGame] = useState(null);
    const [grid, setGrid] = useState([]);
    const [completed, setCompleted] = useState(false);
    const { dispatch } = useContext(SudokuContext)

    useEffect(() => {
        getGames().then(games => {
            const g = games.find(x => x._id === gameId);
            dispatch({ type: 'NEW_GAME', size: g.difficulty === "EASY" ? 6 : 9, initial: g.board })
            // console.log(g)
            setGame(g);
            setGrid(g.board);

        });

        getHighscoreByGame(gameId).then(hs => {
            if (hs.completedBy.includes(username)) setCompleted(true);
        });
    }, [gameId]);

    if (!game) return <div>Loading...</div>;

    return (
        <div>
            <h1>{game.name}</h1>
            <GameBoard/>
            <NewResetBar/>
            {completed && <p>Game Completed! Solution shown above.</p>}
        </div>
    );
};

export default Game;
//  <SudokuBoard board={grid} onChange={setGrid} />