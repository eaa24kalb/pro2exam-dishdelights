import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Recipes from './views/Recipes';
import PersonalFavorites from './views/PersonalFavorites';
import About from './views/About';
import Contact from './views/Contact';
import RecipeDetail from './views/RecipeDetail';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/personal-favorites" element={<PersonalFavorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </Router>
  );
}

export default App

