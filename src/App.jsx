import './App.scss'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'
import Description from './components/Description/Description'
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Home />

        <Routes>
          <Route
            path='/'
            element={<Description />}>
          </Route>
            
          <Route
            path='/blog'
            element={<Blog />}>
          </Route>
        </Routes>

    </div>
  )
}

export default App
