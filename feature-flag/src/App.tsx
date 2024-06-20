import "./App.css";
import { FeatureFlagContext, FeatureFlagProvider } from "./context";

function App() {
  return (
    <FeatureFlagProvider>
      <FeatureFlagContext.Consumer>
        {({ isFeatureEnabled, toggleFeatureFlag }) => (
          <div>
            {isFeatureEnabled("feature-a") && (
              // Render feature-b-enabled content
              <div>A Enabled Component</div>
            )}

            {isFeatureEnabled("feature-b") && (
              // Render feature-b-enabled content
              <div>B Enabled Component</div>
            )}

            {isFeatureEnabled("feature-c") && (
              // Render feature-b-enabled content
              <div>C Enabled Component</div>
            )}

            <div>
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
