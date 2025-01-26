import MapImg from "@/assets/images/maps.png";
import OrderInfo from "./components/OrderInfo";
import TrackingInfo from "./components/TrackingInfo";
import { TbArrowNarrowLeft } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Delivery = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-dvh w-full relative"
      style={{
        backgroundImage: `url(${MapImg})`,
        objectFit: `cover`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
      }}
    >
      <button
        className="bg-white absolute top-5 left-5 shadow-lg p-4 rounded-lg"
        onClick={() => navigate(-1)}
      >
        <TbArrowNarrowLeft className="text-xl" />
      </button>
      <div className="container absolute bottom-80 p-5">
        <OrderInfo />
      </div>
      <div className="container absolute bottom-5 p-5">
        <TrackingInfo />
      </div>
    </div>
  );
};

export default Delivery;
