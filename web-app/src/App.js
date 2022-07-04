import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { ToastContainer } from "react-toastify"

import './App.css';
import Navigation from './components/Navigation';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
        </Routes>
      </Router>
      <ToastContainer />

    </div>
  );
}

export default App;
