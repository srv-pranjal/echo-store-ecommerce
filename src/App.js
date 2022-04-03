import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
