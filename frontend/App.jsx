import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './src/components/Navbar';
import Home from './src/pages/Home';
import Selection from './src/pages/Selection';
import Game from './src/pages/Game';
import Rules from './src/pages/Rules';
import Scores from './src/pages/Scores';
import { SudokuProvider } from './src/sudoku/SudokuContext';

const App = () => (
  <SudokuProvider>
    <div className="app-root">
      <Navbar />
      <main className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Selection />} />
            <Route path="/game/:gameId" element={<Game />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/scores" element={<Scores />} />
        </Routes>
      </main>
    </div>
  </SudokuProvider>

);

export default App;
