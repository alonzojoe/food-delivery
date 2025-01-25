import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "@/store/store";
import { setCart } from "@/store/features/cartSlice";
import { type CartItem } from "@/store/features/cartSlice";
import Header from "@/layouts/components/Header";
import Controls from "@/layouts/components/Controls";

const AppLayout = () => {

 
  return (
    <div className="h-dvh">
      <div className="container flex flex-col mt-10 px-8">
        <Header />
        <Outlet />
      </div>
      <Controls />
    </div>
  );
};

export default AppLayout;
