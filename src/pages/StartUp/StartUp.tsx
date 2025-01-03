import Header from "@/layouts/components/Header";
import { IoSearch } from "react-icons/io5";
const StartUp = () => {
  return (
    <div className="h-screen container flex items-center flex-col mt-10 px-8">
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
    </div>
  );
};

export default StartUp;
