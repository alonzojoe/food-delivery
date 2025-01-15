import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { CATEGORIES } from "@/constants/category";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { fetchMeals } from "@/store/thunks/mealThunks";
import Categories from "@/pages/Home/components/Categories";
import SekeletonMeal from "@/pages/Home/components/SekeletonMeal";
import Meals from "@/pages/Home/components/Meals";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("/burgers");
  const dispatch = useAppDispatch();
  const { isLoading, meals } = useAppSelector((state) => state.meal);

  useEffect(() => {
    dispatch(fetchMeals(selectedCategory));
  }, [selectedCategory, dispatch]);

  return (
    <>
      <h1 className="my-5 text-3xl font-bold text-center !leading-snug">
        What do you want to <span className="text-primary">Eat</span>?
      </h1>
      <div className="bg-secondary w-full p-4 flex items-center rounded-xl relative">
        <input
          type="text"
          className="bg-transparent text-lg p-1 font-semibold ring-0 border-0 outline-none w-full placeholder:opacity-45"
          placeholder="Search your food"
        />
        <IoSearch className="text-2xl bg-transparent absolute right-3 text-textDark opacity-85" />
      </div>
      <>
        <h3 className="my-5 text-xl font-semibold">Categories</h3>
        <Categories
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          setCategory={setSelectedCategory}
        />
      </>
      <div>
        <h3 className="my-5 text-xl font-semibold">Popular</h3>
        <div className="grid cols-1 md:grid-cols-2 gap-8">
          {isLoading ? (
            <>
              <SekeletonMeal />
              <SekeletonMeal />
            </>
          ) : (
            <>
              <Meals meals={meals} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
