import { MdShoppingCartCheckout } from "react-icons/md";
import { RiMenu5Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
const StartUp = () => {
  return (
    <div className="h-screen container flex items-center flex-col mt-10 px-8">
      <div className="flex items-center justify-between w-full">
        <div className="bg-secondary p-3 rounded-lg">
          <RiMenu5Fill className="text-xl text-textDark" />
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>
            <FaRegUserCircle className="text-xl text-primary" />
          </span>
          <span className="text-textDark font-semibold text-xl">
            Hello, Joe
          </span>
          <span>
            <FaCaretDown className="text-xl text-primary" />
          </span>
        </div>
        <div className="bg-secondary p-3 rounded-lg">
          <MdShoppingCartCheckout className="text-xl text-textDark" />
        </div>
      </div>
      <div>
        <h1 className="my-5 text-3xl font-bold text-center !leading-snug">
          What do you want to <span className="text-primary">Eat</span>?
        </h1>
      </div>
      <div className="bg-secondary w-full p-4 flex items-center rounded-xl relative">
        <input
          type="text"
          className="bg-transparent text-lg p-1 font-semibold ring-0 border-0 outline-none w-full placeholder:opacity-45"
          placeholder="Search your food"
        />
        <IoSearch className="text-2xl bg-transparent absolute right-3 text-textDark opacity-85" />
      </div>
    </div>
  );
};

export default StartUp;
