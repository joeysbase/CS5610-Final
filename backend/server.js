import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import sudokuRoutes from './routes/sudoku.js';
import highscoreRoutes from './routes/highscore.js';
import { mongoURI } from './config.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/sudoku', sudokuRoutes);
app.use('/api/highscore', highscoreRoutes);

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(8000, () => console.log('Server running on port 8000'));
