import { useState } from 'react'
import Header from "./components/Header"
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

//import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <main className="mx-3">
      <Outlet />
    </main>
  </>
  )
}

      export default App
