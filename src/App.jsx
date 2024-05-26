import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import Admin from './pages/Admin'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Favoritlerim from './pages/Favoritlerim'
import './assets/style.scss'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={'/Admin'} element={<Admin />} />
          <Route path={'/Add'} element={<Add />} />
          <Route path={'/Edit/:id'} element={<Edit />} />
          <Route path={'/Favoritler'} element={<Favoritlerim />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
