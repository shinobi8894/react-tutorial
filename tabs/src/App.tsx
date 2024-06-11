import { useState } from "react";
import "./App.css";
import "./reset.css";

type Tab = "home" | "about" | "contact";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <h1>React Tabs</h1>
      <div className="tab-list">
        <button
          className={activeTab === "home" ? "active" : ""}
          onClick={() => handleTabClick("home")}
        >
          Home
        </button>
        <button
          className={activeTab === "about" ? "active" : ""}
          onClick={() => handleTabClick("about")}
        >
          About
        </button>
        <button
          className={activeTab === "contact" ? "active" : ""}
          onClick={() => handleTabClick("contact")}
        >
          Contact
        </button>
      </div>
      <div className="tab-panel">
        {activeTab === "home" && (
          <div>
            <h2>Home</h2>
            <p>This is the home section.</p>
          </div>
        )}
        {activeTab === "about" && (
          <div>
            <h2>About</h2>
            <p>This is the about section.</p>
          </div>
        )}
        {activeTab === "contact" && (
          <div>
            <h2>Contact</h2>
            <p>This is the contact section.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
