import canvas from './canvas'
import Cutomizer from './pages/Cutomizer'
import { Home } from './pages/Home'
import './App.css'

function App() {
  return (
    <>
    <main className="app transition-all ease-in">
  <Home/>
  <Cutomizer/>
  <canvas/>

  </main>
    </>
  )
}

export default App
