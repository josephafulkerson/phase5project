import React, { useState, useEffect, useRef } from "react";
import NavBar from './NavBar'
import About from './About';
import Home from './Home';
import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {



  return (
    <div>
      <NavBar />
        <Routes>
          <Route path='/about' element={ <About />} />
          <Route path='/home' element={ <Home /> } />
        </Routes>
    </div>
  );
}

export default App;