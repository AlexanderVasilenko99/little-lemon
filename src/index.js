import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = 'Little Lemon';

root.render(
  <React.StrictMode>
    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="og:description" content='Little Lemon Restaurant' />
    <meta name="og:title" content='Little Lemon Restaurant' />
    <meta name="format-detection" content="telephone=yes" />
    <meta name="author" content="Alexander Vasilenko" />
    <meta name="HandheldFriendly" content="true" />
    <meta name="language" content="english" />
    <meta name="og:image" content="" /> */}

    <nav>
      <Navbar />
    </nav>
    <main>main</main>
    <footer><Footer/></footer>
  </React.StrictMode>
);

