import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import Blog from './pages/articles';
import Trend from "./pages/trend";
import Saved from "./pages/saved";
function App() {

  return (
    <>
      <div className="transition-all ease-in duration-700">
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Blog />} path='/articles' />
            <Route element={<Trend />} path='/trending' />
            <Route element={<Saved />} path='/saved' />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
