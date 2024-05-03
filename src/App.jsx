import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Home from './views/Home';
import AddNewCardPage from './views/AddNewCardPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-new-card" element={<AddNewCardPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
