import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Meeting } from "./pages/meeting/Meeting";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meeting/:meetingId" element={<Meeting />} />
      </Routes>
    </div>
  );
}

export default App;
