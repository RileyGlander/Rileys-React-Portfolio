// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';
// import Header from './components/Header';
import { Navbar } from "./components/Navbar"
function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
