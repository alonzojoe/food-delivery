import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartUp from "@/pages/StartUp/StartUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
