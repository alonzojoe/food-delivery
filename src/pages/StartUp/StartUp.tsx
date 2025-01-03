import Header from "@/layouts/components/Header";
import { IoSearch } from "react-icons/io5";
import { PiHamburgerFill } from "react-icons/pi";
import { LuPizza } from "react-icons/lu";
import { RiDrinks2Fill } from "react-icons/ri";
const StartUp = () => {
  return (
    <div className="h-screen container flex flex-col mt-10 px-8">
      <Header />
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
      <div>
        <h3 className="my-5 text-xl font-semibold">Categories</h3>
        <div className="overflow-x-auto">
          <div className="flex gap-4">
            <button className="bg-primary py-2 px-3 rounded-2xl flex gap-2 items-center">
              <span className="bg-white p-1 rounded-lg">
                <PiHamburgerFill className="text-primary text-xl" />
              </span>
              <span className="text-white text-md">Burger</span>
            </button>
            <button className="bg-secondary py-2 px-3 rounded-2xl flex gap-2 items-center">
              <span className="bg-secondary p-1 rounded-lg">
                <LuPizza className="text-dark text-xl" />
              </span>
              <span className="text-dark text-md">Pizza</span>
            </button>
            <button className="bg-secondary py-2 px-3 rounded-2xl flex gap-2 items-center">
              <span className="bg-secondary p-1 rounded-lg">
                <RiDrinks2Fill className="text-dark text-xl" />
              </span>
              <span className="text-dark text-md">Drink</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="my-5 text-xl font-semibold">Popular</h3>
        <div className="overflow-x-auto"></div>
      </div>
    </div>
  );
};

export default StartUp;
