import React from 'react';
import MarsBountiesList from './Bounties.jsx';
import TransactionButton from './TransactionButton.jsx';
import FormComponent from './FormComponent.jsx';
import Navbar from './Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='w-screen h-screen'>
        <BrowserRouter>
          <Routes>
            <Route path="/bounties" element={<React.Fragment>
              <Navbar />
              <MarsBountiesList />
              <FormComponent />
            </React.Fragment>} />
            <Route path="/dao" element={<React.Fragment>
              <Navbar />
              <FormComponent />
            </React.Fragment>} />
            <Route path="/account" element={<React.Fragment>
              <Navbar />
            </React.Fragment>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
