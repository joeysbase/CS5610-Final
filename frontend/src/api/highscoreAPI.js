import axios from 'axios';

export const getHighscores = () => axios.get('/api/highscore').then(res => res.data);
export const postHighscore = (gameId, username) => axios.post('/api/highscore', { gameId, username }).then(res => res.data);
export const getHighscoreByGame = (gameId) => axios.get(`/api/highscore/${gameId}`).then(res => res.data);
