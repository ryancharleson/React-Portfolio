
import './App.css';

import { NavBar } from './components/NavBar';
import { Home } from './components/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar />
          <Routes>
            <Route path='/home' element={<Home />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
