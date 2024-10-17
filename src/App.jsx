import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contect/Contect';
import MainFile from './Components/Home/MainFille/MainFile';

const App = () => {
  return (

    <div className=''>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/homePage" element={<MainFile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
};

export default App;
