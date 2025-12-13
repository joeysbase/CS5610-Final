import Game from '../models/Game.js';
import Highscore from '../models/Highscore.js';
import { generateName } from '../utils/generateName.js';
import { generatePuzzle } from './generator.js'

export const getGames = async (req, res) => {
  const games = await Game.find();
  res.json(games);
};

export const createGame = async (req, res) => {
  const { difficulty, creator } = req.body;
  const name = generateName();
  
  const board = generateBoard(difficulty);
  
  const game = await Game.create({ name, difficulty, creator, board});
  await Highscore.create({ gameId: game._id });
  
  res.json({ gameId: game._id });
};

export const updateGame = async (req, res) => {
  const { gameId } = req.params;
  const update = req.body;
  const game = await Game.findByIdAndUpdate(gameId, update, { new: true });
  res.json(game);
};

export const deleteGame = async (req, res) => {
  const { gameId } = req.params;
  await Game.findByIdAndDelete(gameId);
  await Highscore.deleteOne({ gameId });
  res.json({ message: 'Game deleted' });
};


const generateBoard = (difficulty) => {
    let size=6
    let filled=1
    if(difficulty==="EASY"){
        filled = Math.round(6*6*0.5)
        size=6
    }else{
        filled = 28 + Math.floor(Math.random()*3)
        size=9
    }
    return generatePuzzle(size,filled)
};

