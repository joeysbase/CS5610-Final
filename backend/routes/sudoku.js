import express from 'express';
import { getGames, createGame, updateGame, deleteGame } from '../controllers/sudokuController.js';
const router = express.Router();

router.get('/', getGames);
router.post('/', createGame);
router.put('/:gameId', updateGame);
router.delete('/:gameId', deleteGame);

export default router;
