import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StartUp from "@/pages/StartUp/StartUp";
import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/Home/Home";
import Meal from "@/pages/Meal/Meal";
import Cart from "@/pages/Cart/Cart";
import Favorites from "@/pages/Favorites/Favorites";

const CLIENT_ID =
  "363478011041-t6jslqdj60l5uf76i2januul10n0ta9v.apps.googleusercontent.com";
// 363478011041-t6jslqdj60l5uf76i2januul10n0ta9v.apps.googleusercontent.com
// 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
function App() {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartUp />} />
          <Route path="/home" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
          <Route path="/meal/:id" element={<Meal />}></Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
