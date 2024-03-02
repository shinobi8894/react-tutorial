import { useState } from 'react';
import './App.css';

function App() {

  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <div className='App'>
      <div className='stars'>
        {
          [1, 2, 3, 4, 5].map((star) => {
            return (
              <span
                key={star}
                style={{ cursor: 'pointer' }}
                onClick={() => handleStarClick(star)}
              >
                {star <= rating ? '★' : '☆'}
              </span>
            )
          })
        }
      </div>
      <p>Current Rating: {rating}</p>
    </div>
  );
}

export default App;

