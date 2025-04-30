import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import MovieDetails from './components/pages/MovieDetails';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <header className="text-3xl font-bold text-center py-6">🎬 TMDB Movie App</header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;