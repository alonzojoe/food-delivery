import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import FavoriteItem from "@/pages/Favorites/components/FavoriteItem";
import { useAppSelector, useAppDispatch } from "@/store/store";
import { setFavorites, addOrRemoveItem } from "@/store/features/favoriteSlice";
import { type Meal } from "@/store/features/mealSlice";
import useLocalStorage from "@/hooks/useLocalStorage";
import useDebounce from "@/hooks/useDebounce";
import InputSearch from "@/components/UI/InputSearch";

const Favorites = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    search_keyword: "",
  });

  const search_keyword = searchParams.get("keyword") || "";
  const debounceSearch = useDebounce(search_keyword);
  const dispatch = useAppDispatch();
  const { meals } = useAppSelector((state) => state.favorites);
  const [favoriteItems, setFavoriteItems] = useLocalStorage<Meal[] | []>(
    "FAVORITES",
    []
  );

  useEffect(() => {
    dispatch(setFavorites({ meals: favoriteItems }));
  }, [dispatch, favoriteItems]);

  const addRemove = (selectedMeal: Meal) => {
    const currentFavorites: Meal[] = [...favoriteItems];

    if (currentFavorites && selectedMeal) {
      const existed = currentFavorites.some(
        (fav) => fav.id === selectedMeal.id
      );

      if (existed) {
        const filteredMeals = currentFavorites.filter(
          (fav) => fav.id !== selectedMeal.id
        );
        setFavoriteItems(filteredMeals);
      } else {
        setFavoriteItems([...currentFavorites, selectedMeal]);
      }
    }

    dispatch(addOrRemoveItem({ meal: selectedMeal }));
  };

  const FILTERED_FAVORITES = meals.filter((meal) =>
    meal.name.toLowerCase().includes(debounceSearch.toLowerCase())
  );

  return (
    <div className="container !px-0 my-5  h-dvh">
      <InputSearch setParams={setSearchParams} keywordValue={search_keyword} />

      <h2 className="text-primary text-2xl font-bold">Favorites</h2>
      <div className="mt-5">
        <div className="grid cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
          {!meals.length ? (
            <p className="text-center text-textMuted text-md">
              There are no current favorite meals. Add some?
            </p>
          ) : (
            <>
              {!FILTERED_FAVORITES.length ? (
                <p className="text-center text-textMuted text-md">
                  No matching favorite meals found. Please try a different
                  search keyword.
                </p>
              ) : (
                <>
                  {FILTERED_FAVORITES.map((favorite) => (
                    <FavoriteItem
                      meal={favorite}
                      showHeart={true}
                      favorite={true}
                      key={favorite.id}
                      onAddRemove={addRemove}
                    />
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
