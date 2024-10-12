import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navbar from './Components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = 'Little Lemon';
root.render(
  <React.StrictMode>
    <nav>
      <Navbar/>
    </nav>
    <main>main</main>
    <footer>footer</footer>
  </React.StrictMode>
);

