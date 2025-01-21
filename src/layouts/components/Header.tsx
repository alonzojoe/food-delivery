import { RiMenu5Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useAppSelector } from "@/store/store";
import { capitalizedFirstLetter } from "@/libs/utils";

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <div className="flex items-center justify-between w-full">
      <div className="bg-secondary p-3 rounded-lg flex-shrink-0">
        <RiMenu5Fill className="text-xl text-textDark" />
      </div>
      <div className="flex justify-center items-center gap-2">
        <span className="flex-shrink-0">
          <FaRegUserCircle className="text-xl text-primary" />
        </span>
        <span className="text-textDark font-semibold text-xl overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px]">
          Hello, {capitalizedFirstLetter(user?.given_name || "Joe")}
        </span>
        <span className="flex-shrink-0">
          <FaCaretDown className="text-xl text-primary" />
        </span>
      </div>
      <div className="bg-secondary p-3 rounded-lg flex-shrink-0 relative">
        <IoMdCart className="text-xl text-textDark" />
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary border-2 border-secondary rounded-full -top-2 -end-2">
          {cart.length}
        </div>
      </div>
    </div>
  );
};

export default Header;
