import Canvas from './canvas'
import Cutomizer from './pages/Cutomizer'
import { Home } from './pages/Home'
import './App.css'

function App() {
  return (
    <>
    <main className="app transition-all ease-in">
  <Home/>
  <Cutomizer/>
  <Canvas/>

  </main>
    </>
  )
}

export default App
