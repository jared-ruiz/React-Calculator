import React from 'react';

//Router imports to assist with smooth SPA creation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//component imports
import Home from './components/Home';
import Calculator from './components/Calculator';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;