import { useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import Blog from './pages/blog';
import About from "./pages/about"
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Blog />} path='/blog' />
            <Route element={<About />} path='/about' />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
