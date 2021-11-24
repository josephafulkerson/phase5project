import React, { useState, useEffect, useRef } from "react";
import Test from './Test'
import NavBar from './NavBar'
import About from './About';
import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {



  return (
    <div>
      <NavBar />
        <Routes>
          <Route path='/about' element={ <About />} />
        </Routes>
    </div>
  );
}

export default App;