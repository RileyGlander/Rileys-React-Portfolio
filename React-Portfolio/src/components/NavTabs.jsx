// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import Header from './Header';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        // <Header key={1} className="nav-link text-light">
        
        // </Header>,
        <Link key={2} className="nav-link text-light" to="/">
          Home
        </Link>,
        <Link key={3} className="nav-link text-light" to="/resume">
        Resume
      </Link>,
      ]}
    />
  );
}
