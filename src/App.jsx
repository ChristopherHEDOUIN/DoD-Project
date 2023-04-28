import './App.scss'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';

import categoriesData from './data/categorie';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';

function App() {

  return (
    <div className="App">
      <NavBar categories={categoriesData} />

        <Routes>
          <Route
            path='/'
            element={<Home />}>
          </Route>
            
          <Route
            path='/blog'
            element={<Blog />}>
          </Route>

        </Routes>
      <ScrollButton />
      <Footer />
    </div>
  )
}

export default App
