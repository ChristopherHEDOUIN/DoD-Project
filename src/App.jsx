import Card from './components/ListCards/Card'
import Cards from './components/ListCards/Cards'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';

import './App.css'

import blogData from './data/data';
import post from './data/post';
import categoriesData from './data/categorie';
import { Route, Routes } from 'react-router-dom';
import Curriculum from './components/Curriculum/Curriculum';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <div className="App">
      <NavBar categories={categoriesData} />
      
        <Routes>
          <Route
            path='/'
            element={<Home/>}
          />
            
          <Route
            path='/blog'
            element={<Cards blogData={blogData} />}
          />

          <Route
            path='/blog/:sessionSlug'
            element={<Card dataCard={post} />}
          />

          
          <Route
            path='/cv'
            element={<Curriculum />}
          />

          <Route
            path='/contact'
            element={<Contact />}
          />



        </Routes>
      <ScrollButton />
      <Footer />
    </div>
  )
}

export default App
