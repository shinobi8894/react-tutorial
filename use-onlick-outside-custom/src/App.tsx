import { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

interface RefObject<T> {
  current: T | null;
}

type Handler = (event: MouseEvent | TouchEvent) => void;

function useOnClickOutside(ref: RefObject<HTMLElement>, handler: Handler): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

function App(): JSX.Element {
  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = (): void => {
    alert('You clicked outside of the header!');
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className="App">
      <header ref={ref} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click outside of container
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
