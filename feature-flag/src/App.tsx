import "./App.css";
import { FeatureFlagContext, FeatureFlagProvider } from "./context";

function App() {
  return (
    <FeatureFlagProvider>
      <FeatureFlagContext.Consumer>
        {({ isFeatureEnabled, toggleFeatureFlag }) => (
          <div className="container">
            <div className="feature-section">
              {isFeatureEnabled("feature-a") && (
                // Render feature-b-enabled content
                <div>
                  <h2>A Enabled Component</h2>
                  <p>You enabled A</p>
                </div>
              )}

              {isFeatureEnabled("feature-b") && (
                // Render feature-b-enabled content
                <div>
                  <h2>B Enabled Component</h2>
                  <p>You enabled B</p>
                </div>
              )}

              {isFeatureEnabled("feature-c") && (
                // Render feature-b-enabled content
                <div>
                  <h2>C Enabled Component</h2>
                  <p>You enabled C</p>
                </div>
              )}
            </div>

            <div className="toggle-buttons">
              <button onClick={() => toggleFeatureFlag("feature-a")}>
                Toggle Feature A
              </button>
              <button onClick={() => toggleFeatureFlag("feature-b")}>
                Toggle Feature B
              </button>
              <button onClick={() => toggleFeatureFlag("feature-c")}>
                Toggle Feature C
              </button>
            </div>
          </div>
        )}
      </FeatureFlagContext.Consumer>
    </FeatureFlagProvider>
  );
}

export default App;
