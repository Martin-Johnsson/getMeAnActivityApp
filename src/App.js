import "./App.css";
import { useState } from "react";
import Axios from "axios";
import Activity from "./components/Activity";
function App() {
  const [showActivity, setShowActivity] = useState(false);

  return (
    <div className="App">
      <h1>Activity Application</h1>

      {!showActivity ? (
        <button
          onClick={() => {
            setShowActivity(!showActivity);
          }}
        >
          Start application
        </button>
      ) : (
        <Activity />
      )}
    </div>
  );
}
export default App;
