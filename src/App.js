
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

import Navbar from './Component/Navbar/Navbar';
import Barcallories from './Pages/Barcallories/Barcallories';
import Exsercise from './Component/Exsercise/Exsercise';
import Achievement from './Component/Achievement/Achievement';
import Healt from './Pages/Healt/Healt';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Health' element={<Healt />}/>
        <Route path='/Barcallories' element={<Barcallories />}/>
        <Route path='/Exsercise' element={<Exsercise />}/>
        <Route path='/Achievement' element={<Achievement />}/>
      </Routes>

    </div>
  );
}

export default App;
