import { RiMenu5Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useAppSelector } from "@/store/store";
import { capitalizedFirstLetter } from "@/libs/utils";
import { IoLogOutOutline } from "react-icons/io5";
import useToggle from "@/hooks/useToggle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [value, toggleValue] = useToggle(false);

  const { user } = useAppSelector((state) => state.auth);
  const { cart } = useAppSelector((state) => state.cart);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("AUTH_USER");

    navigate("/", { replace: true });
  };

  return (
    <div className="flex items-center justify-between w-full">
      <div className="bg-secondary p-3 rounded-lg flex-shrink-0">
        <RiMenu5Fill className="text-xl text-textDark" />
      </div>
      <div className="flex justify-center items-center gap-2 relative">
        <span className="flex-shrink-0">
          <FaRegUserCircle className="text-xl text-primary" />
        </span>
        <span className="text-textDark font-semibold text-xl overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px]">
          Hello, {capitalizedFirstLetter(user?.given_name || "Joe")}
        </span>
        <span className="flex-shrink-0">
          {value ? (
            <FaCaretUp
              className="text-xl text-primary"
              onClick={() => toggleValue()}
            />
          ) : (
            <FaCaretDown
              className="text-xl text-primary"
              onClick={() => toggleValue()}
            />
          )}
        </span>
        {value && (
          <div className="border border-primary bg-white py-1 w-full rounded-lg absolute left-1/2 -translate-x-1/2 -bottom-9 flex justify-center items-center">
            <button
              onClick={handleLogout}
              className="text-primary items-center flex gap-1 cursor-pointer font-semibold"
            >
              <IoLogOutOutline className="text-xl" /> <span>Logout</span>
            </button>
          </div>
        )}
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
