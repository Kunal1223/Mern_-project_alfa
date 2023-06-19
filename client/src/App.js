import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </>
  );
}

export default App;
