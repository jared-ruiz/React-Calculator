import React from 'react';

//Router imports to assist with smooth SPA creation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//component imports
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;