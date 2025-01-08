import Header from "@/layouts/components/Header";
import Controls from "@/layouts/components/Controls";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="h-screen">
      <div className="container flex flex-col mt-10 px-8">
        <Header />
        <Outlet />
      </div>
      <Controls />
    </div>
  );
};

export default AppLayout;
