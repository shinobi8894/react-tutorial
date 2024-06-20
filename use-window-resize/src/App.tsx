import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function useWindowResize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

function App() {
  const { width } = useWindowResize();

  return (
    <div className="App">
      <header className="App-header" style={{ flexDirection: width > 600 ? 'row' : 'column' }}>
        <img src={logo} className="App-logo" alt="logo" style={{ width: width > 600 ? '200px' : '150px' }} />
        <div>
          <p>
            Reduce your window screen !
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
