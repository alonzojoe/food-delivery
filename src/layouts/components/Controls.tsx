import { AiFillHome } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { SlUser } from "react-icons/sl";
import { MdShoppingCartCheckout } from "react-icons/md";
const Controls = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="flex items-center justify-between mx-2 p-4 px-5 bg-secondary rounded-3xl">
        <span>
          <AiFillHome className="text-2xl" />
        </span>
        <span>
          <FaRegHeart className="text-2xl" />
        </span>
        <span className="p-2 rounded-full bg-primary">
          <MdShoppingCartCheckout className="text-2xl text-white" />
        </span>
        <span>
          <SlUser className="text-2xl" />
        </span>
      </div>
    </div>
  );
};

export default Controls;
