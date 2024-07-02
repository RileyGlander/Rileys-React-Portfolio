import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

// import Contact from './components/pages/Contact';
import Home from './components/pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
     
      
      
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
