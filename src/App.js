import { useEffect } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";

function App() {
  useEffect(() => {}, []);

  const convert = async () => {};

  return (
    <div className=" bg-slate-900">
      <h1 className=" bg-slate-900 text-4xl text-center text-orange-600 mt-5">
        Cisco GEMS <br></br>Code Converter
      </h1>
      <HomePage />
    </div>
  );
}

export default App;
