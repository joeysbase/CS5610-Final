import Highscore from '../models/Highscore.js';

export const getHighscores = async (req, res) => {
  const scores = await Highscore.find().populate('gameId');
  const filtered = scores.filter(s => s.completedBy.length > 0)
    .sort((a, b) => b.completedBy.length - a.completedBy.length);
  res.json(filtered);
};

export const postHighscore = async (req, res) => {
  const { gameId, username } = req.body;
  const hs = await Highscore.findOne({ gameId });
  if (!hs.completedBy.includes(username)) hs.completedBy.push(username);
  await hs.save();
  res.json(hs);
};

export const getHighscoreByGame = async (req, res) => {
  const { gameId } = req.params;
  const hs = await Highscore.findOne({ gameId });
  res.json(hs);
};
