import { RiMenu5Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="bg-secondary p-3 rounded-lg">
        <RiMenu5Fill className="text-xl text-textDark" />
      </div>
      <div className="flex justify-center items-center gap-2">
        <span>
          <FaRegUserCircle className="text-xl text-primary" />
        </span>
        <span className="text-textDark font-semibold text-xl">Hello, Joe</span>
        <span>
          <FaCaretDown className="text-xl text-primary" />
        </span>
      </div>
      <div className="bg-secondary p-3 rounded-lg">
        <IoMdCart className="text-xl text-textDark" />
      </div>
    </div>
  );
};

export default Header;
