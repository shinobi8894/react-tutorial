import React, { useState } from 'react';
import './App.css';
import './reset.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQRCode = () => {
    const base64QR = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputText)}`;
    setQrCode(base64QR);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>QR Code Generator</h1>
        <input 
          type="text" 
          placeholder="Enter text here" 
          value={inputText} 
          onChange={handleInputChange} 
        />
        <button onClick={generateQRCode}>Generate QR Code</button>
        {qrCode && <img src={qrCode} alt="Generated QR Code" />}
      </header>
    </div>
  );
}

export default App;
