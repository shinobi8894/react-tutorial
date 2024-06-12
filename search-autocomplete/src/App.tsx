import React, { useState, ChangeEvent } from 'react';
import './App.css';

const mockSuggestions: string[] = [
  'apple',
  'banana',
  'cherry',
  'date',
  'elderberry',
  'fig',
  'grape',
  'honeydew',
];

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term) {
      const filteredSuggestions = mockSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(term.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
          placeholder="Search..."
        />
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => setSearchTerm(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
