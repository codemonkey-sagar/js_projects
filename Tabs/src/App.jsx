import { useState } from "react";
import content from "./data";

const App = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  console.log(content[activeContentIndex]);
  return (
    <>
      <header>
        <h1>React Tab</h1>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            Related Resources
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => 
              <li key={item}>{item}</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
