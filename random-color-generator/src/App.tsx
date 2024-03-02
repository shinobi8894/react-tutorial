import './App.css';

function App() {

  // Function to generate a new random color
  const generateRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

  /**
   * This function `applyColors` is responsible for applying the given colors to the application's root CSS variables.
   * It updates the application's color theme in real-time by setting the style properties for `--color-1` and `--color-2`.
   */
  const applyColors = (color1: string, color2: string) => {
    document.documentElement.style.setProperty('--color-1', color1);
    document.documentElement.style.setProperty('--color-2', color2);
  };

  /**
   * This function `changeColors` is responsible for changing the colors of the application's background dynamically.
   * It generates two new random colors and then applies these colors using the `applyColors` function.
   */
  const changeColors = () => {
    const newColor1 = generateRandomColor();
    const newColor2 = generateRandomColor();
    applyColors(newColor1, newColor2);
  };

  return (
    <div className="App" onClick={changeColors}>
      <h2>Click background to generate new color</h2>
    </div>
  );
}

export default App;
