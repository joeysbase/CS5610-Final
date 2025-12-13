import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  difficulty: { type: String, enum: ['EASY','NORMAL'], required: true },
  creator: { type: String, required: true },
  date: { type: Date, default: Date.now },
  board: { type: Array, required: true }
});

export default mongoose.model('Game', gameSchema);
