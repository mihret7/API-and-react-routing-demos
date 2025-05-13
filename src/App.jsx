import { useState } from 'react'
import Test from './Components/GeminiAPI/GeminiAi'

import './App.css'
import Header from './Components/Header/Header';
import FakeStoreAPI from './Components/FakeStoreAPI/FakeStoreAPI';
import SingleFake from './Components/FakeStoreAPI/SingleFake'
import UsingRandomUser from './Components/UsingRandomUser/UsingRandomUser'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  

  return (
    <>
      
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/gemini" element={<Test />} />
        <Route path="/fake" element={<FakeStoreAPI />} />
        <Route path="/fake/:id" element={<SingleFake />} />

        <Route path="/random" element={<UsingRandomUser />} />
        
      </Routes>
    </>
  );
}

export default App
