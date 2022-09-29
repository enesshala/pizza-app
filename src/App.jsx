import "./App.css";
import { useState, useEffect } from "react";

// functions
import { getTest } from "./functions/test";

function App() {
  const [data, setData] = useState("Hello worlddddd");

  useEffect(() => {
    getTest()
      .then((res) => {
        setData(res.message);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="text-red-400">{data}</h1>
    </div>
  );
}

export default App;
