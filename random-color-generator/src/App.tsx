import './App.css';

function App() {

  /**
   * This function `changeColors` is responsible for changing the colors of the application's background dynamically.
   * It works by generating two new random colors and then applying these colors to the application's root CSS variables.
   */
  const changeColors = () => {
    // Generate two new random colors. Each color is created by generating a random number (using `Math.random`)
    // which is then multiplied by 16777215 (the maximum value for a 24-bit color) and converted to a hexadecimal string.
    const newColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const newColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Apply the newly generated colors to the application's root CSS variables (`--color-1` and `--color-2`).
    // This is done by accessing the `document.documentElement` (the root element of the document) and setting
    // its style properties for `--color-1` and `--color-2` to the new colors. This effectively updates the application's
    // color theme in real-time.
    document.documentElement.style.setProperty('--color-1', newColor1);
    document.documentElement.style.setProperty('--color-2', newColor2);
  };


  return (
    <div className="App" onClick={changeColors}>
      <h2>Click background to generate new color</h2>
    </div>
  );
}

export default App;
