import { AiFillHome } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { SlUser } from "react-icons/sl";
import { MdShoppingCartCheckout } from "react-icons/md";
const Controls = () => {
  return (
    <div className="fixed bottom-0 bg-secondary w-full rounded-2xl p-4">
      <div className="flex items-center justify-between px-5">
        <span className="p-2 rounded-full bg-primary">
          <AiFillHome className="text-2xl text-white" />
        </span>
        <span>
          <FaRegStar className="text-2xl" />
        </span>
        <span>
          <MdShoppingCartCheckout className="text-2xl" />
        </span>
        <span>
          <SlUser className="text-2xl" />
        </span>
      </div>
    </div>
  );
};

export default Controls;
