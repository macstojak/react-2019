import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import HomePage from './components/HomePage/HomePage';
import Menu from './components/Menu/Menu';
import MoviesListPage from './components/MoviesListPage/MoviesListPage';
import MoviesDetailsPage from './components/MoviesDetailsPage/MoviesDetailsPage';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/movies" component={MoviesListPage} />
        <Route path="/movie/:id" component={MoviesDetailsPage} />
      </div>
    </Router>
  );
}

export default App;
