import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import WeaponList from './components/WeaponList/WeaponList'
import TalismanList from './components/TalismanList/TalismanList'

function App() {
  

  return (
    <div className='app-div'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/weapons' element={<WeaponList />}/>
          <Route path='/talismans' element={<TalismanList />} />
        </Routes>
      </main>
      
    </div>
  )
}

export default App
