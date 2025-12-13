import express from 'express';
import { getHighscores, postHighscore, getHighscoreByGame } from '../controllers/highscoreController.js';
const router = express.Router();

router.get('/', getHighscores);
router.post('/', postHighscore);
router.get('/:gameId', getHighscoreByGame);

export default router;
