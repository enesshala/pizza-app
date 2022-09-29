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
      <h1 className="text-red-400 text-3xl shadow-lg w-96 p-3 rounded-lg mt-10 ml-10">
        {data}
      </h1>
    </div>
  );
}

export default App;
