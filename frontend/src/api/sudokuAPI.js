import axios from 'axios';

export const getGames = () => axios.get('/api/sudoku').then(res => res.data);
export const createGame = (difficulty, creator) => axios.post('/api/sudoku', { difficulty, creator }).then(res => res.data);
export const updateGame = (gameId, update) => axios.put(`/api/sudoku/${gameId}`, update).then(res => res.data);
export const deleteGame = (gameId) => axios.delete(`/api/sudoku/${gameId}`).then(res => res.data);
