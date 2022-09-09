import React from 'react';

//Router imports to assist with smooth SPA creation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//component imports
import Home from './components/Home';
import Calculator from './components/Calculator';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/calculator' element={<Calculator />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;