import './App.css';
import './style.css';
import Dashboard from './dashboard.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Courses from './courses.jsx';
import Adimission from './admission.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="maincontainer">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/admission" element={<Adimission/>}/>
          <Route path='/about' element={<About/>}/> 
          <Route path='/contact' element={<Contact/>}/>
                 </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;