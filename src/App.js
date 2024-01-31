import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Component/Navbar/Navbar";
import { Home } from "./Pages/Home";
import { Calendar, Calendar1 } from "./Pages/Calendar";
import { Goals } from "./Pages/Goals";
import MoodChart from "./Component/MoodChart/MoodChart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calendar" element={<Calendar1 />}></Route>
        <Route path="/Goals" element={<Goals />}></Route>
        <Route Component={MoodChart} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
