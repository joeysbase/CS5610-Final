import mongoose from 'mongoose';

const highscoreSchema = new mongoose.Schema({
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  completedBy: { type: [String], default: [] }
});

export default mongoose.model('Highscore', highscoreSchema);
