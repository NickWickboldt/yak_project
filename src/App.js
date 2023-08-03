import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import Physical from './Physical';
import Domestication from './Domestication';
import Cultural from './Cultural';
import Bibliography from './Bibliography';
import Navbar from './Navbar';
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/physical' element={<Physical/>}/>
        <Route path='/domestication' element={<Domestication/>}/>
        <Route path='/cultural' element={<Cultural/>}/>
        <Route path='/bibliography' element={<Bibliography/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
