import {BrowserRouter as Router, Routes,Route,} from 'react-router-dom'
import  Home  from './components/Home';
import  {Navbar}  from './Navbar';
import  Featured  from './components/Featured';
import  Women  from './components/Women';
import  Shop  from './components/Shop';
import New  from './components/New';

function App() {
  return (
    <Router>
    <Navbar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/featured' element={<Featured/>}/>
    <Route path='/women' element={<Women/>}/>
    <Route path='/new' element={<New/>}/>
    <Route path='/shop' element={<Shop/>}/>
  </Routes>


  </Router>
  );
}

export default App;
