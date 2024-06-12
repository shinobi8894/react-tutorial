import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click below to open the modal popup.
        </p>
        <button onClick={toggleModal} className="App-link">
          Open Modal
        </button>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleModal}>&times;</span>
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
