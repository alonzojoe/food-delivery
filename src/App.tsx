import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StartUp from "@/pages/StartUp/StartUp";
import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/Home/Home";
import Meal from "@/pages/Meal/Meal";
import Cart from "@/pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartUp />} />
        <Route path="/home" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/meal/:id" element={<Meal />}></Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
