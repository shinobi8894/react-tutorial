import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [animation, setAnimation] = useState('');

  const openModal = () => {
    setAnimation('fadeIn 0.5s');
    setModalOpen(true);
  };

  const closeModal = () => {
    setAnimation('fadeOut 0.5s');
    setTimeout(() => {
      setModalOpen(false);
    }, 500); // This timeout duration should match the fadeOut animation duration
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click below to open the modal popup.
        </p>
        <button onClick={openModal} className="App-link">
          Open Modal
        </button>
        {isModalOpen && (
          <div className="modal" style={{ animation }}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <p>Welcome to the React modal popup!</p>
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about React
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
