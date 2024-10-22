import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Hotels from './components/Hotels';
import About from './components/About'
import Gallery from './components/Gallery';
import News from './components/News';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path='/Home' element={<Navigate to="/Home"/>}/> */}
          <Route path='/' element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Gallery' element={<Gallery/>}/>
          <Route path='/Hotels' element={<Hotels/>}/>
          <Route path='/News' element={<News/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
