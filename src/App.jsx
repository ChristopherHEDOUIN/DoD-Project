import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'
import Title from './components/Title/Title';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';

import './App.css'
import categoriesData from './data/categorie';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Title />
      <NavBar categories={categoriesData} />
        <Routes>
          <Route
            path='/'
            element={<Home/>}>
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
