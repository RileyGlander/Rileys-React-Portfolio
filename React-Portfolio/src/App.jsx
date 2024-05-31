// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  return (
    <div className="app">
      <Nav />
      <main className="app-content">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
