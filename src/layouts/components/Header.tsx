import { RiMenu5Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useAppSelector } from "@/store/store";
import { capitalizedFirstLetter } from "@/libs/utils";

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);

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
      <div className="bg-secondary p-3 rounded-lg flex-shrink-0">
        <IoMdCart className="text-xl text-textDark" />
      </div>
    </div>
  );
};

export default Header;
