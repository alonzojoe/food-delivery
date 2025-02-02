import { useEffect, useState } from "react";
import { CATEGORIES } from "@/constants/category";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { fetchMeals } from "@/store/thunks/mealThunks";
import Categories from "@/pages/Home/components/Categories";
import SekeletonMeal from "@/pages/Home/components/SekeletonMeal";
import Meals from "@/pages/Home/components/Meals";
import useDebounce from "@/hooks/useDebounce";
import { searchMeal } from "@/store/features/mealSlice";
import { useSearchParams } from "react-router-dom";
import InputSearch from "@/components/UI/InputSearch";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams({ keyword: "" });

  const keyword = searchParams.get("keyword") || "";
  const [selectedCategory, setSelectedCategory] = useState("/burgers");
  const dispatch = useAppDispatch();
  const { isLoading, meals } = useAppSelector((state) => state.meal);

  const debounceSearch = useDebounce(keyword);

  useEffect(() => {
    if (!debounceSearch) return;
    dispatch(searchMeal({ keyword: debounceSearch }));
    console.log("debounceSearch:", debounceSearch);
  }, [debounceSearch, dispatch]);

  useEffect(() => {
    dispatch(fetchMeals(selectedCategory));
  }, [selectedCategory, dispatch]);

  return (
    <>
      <h1 className="my-5 text-3xl font-bold text-center !leading-snug">
        What do you want to <span className="text-primary">Eat</span>?
      </h1>
      <InputSearch setParams={setSearchParams} keywordValue={keyword} />
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
        <div className="grid cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
          {isLoading ? (
            <>
              <SekeletonMeal />
              <SekeletonMeal />
            </>
          ) : (
            <>
              <Meals selectedCategory={selectedCategory} meals={meals} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
