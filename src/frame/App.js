import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import modules from '../modules';

import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader modules={modules} />
        <AppContent modules={modules} />
      </div>
    </Router>
  );
}