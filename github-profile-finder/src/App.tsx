import { useState, ChangeEvent } from 'react';
import './App.css';

interface UserProfile {
  name: string;
  avatar_url: string;
  login: string;
  bio: string;
  html_url: string;
}

function App() {
  const [username, setUsername] = useState<string>('');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string>('');

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data: UserProfile = await response.json();
      setUserProfile(data);
      setError('');
    } catch (err: any) {
      setError(err.message);
      setUserProfile(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Enter a GitHub username to find user profiles.</p>
        <input
          type="text"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          placeholder="GitHub Username"
        />
        <button onClick={fetchUserProfile} className="App-link">
          Find User
        </button>
        {userProfile && (
          <div className='user-info'>
            <img src={userProfile.avatar_url} alt={userProfile.login} />
            <h2>{userProfile.name}</h2>
            <p>{userProfile.bio}</p>
            <a href={userProfile.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
          </div>
        )}
        {error && <p>{error}</p>}
      </header>
    </div>
  );
}

export default App;
