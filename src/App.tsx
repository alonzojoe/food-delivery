import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartUp from "@/pages/StartUp/StartUp";
import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartUp />} />
        <Route path="/home" element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
