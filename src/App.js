import logo from './logo.svg';
import './App.css';
import Home from './routers/Home';
import Contact from './routers/Contact';
import Aboutus from './routers/Aboutus';
import Project from './routers/Project';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path = "/Contact" element = {<Contact />}/>
      <Route path = "/Aboutus" element = {<Aboutus />}/>
      <Route path = "/Project" element = {<Project />}/>
    </Routes>
    </>
  );
}

export default App;
