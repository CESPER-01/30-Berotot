
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

import Navbar from './Component/Navbar/Navbar';
import Healt from './Pages/Healt/Healt';
import Barcallories from './Pages/Barcallories/Barcallories';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Health' element={<Healt />} />
        <Route path='/Barcallories' element={<Barcallories/>}/>
      </Routes>

    </div>
  );
}

export default App;
