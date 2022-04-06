import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Layout from './shared/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <React.Fragment>
      <Layout/>
    <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </main>
    </React.Fragment>
  
  )
}

export default App;