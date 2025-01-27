import { useEffect } from "react";
import FavoriteItem from "@/pages/Favorites/components/FavoriteItem";
import { useAppSelector, useAppDispatch } from "@/store/store";
import { setFavorites, addOrRemoveItem } from "@/store/features/favoriteSlice";
import { type Meal } from "@/store/features/mealSlice";
import useLocalStorage from "@/hooks/useLocalStorage";
const favorites = [
  {
    id: "23699-choose-your-own-thin-crust-pizza-4-pack",
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89781/choose-your-own-thin-crust-pizza-4-pack.b928a2008eab50c65dc87e59b5952190.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Bartolini’s",
    dsc: "Choose Your Own Thin Crust Pizza - 4 Pack",
    price: 139,
    rate: 4,
    country: "Chicago, IL",
  },
  {
    id: "choose-your-own-new-haven-style-pizza-6-pack",
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131840/choose-your-own-new-haven-style-pizza-6-pack.ab82828afc6172cdd4017556c15e36dd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Zuppardi's Apizza",
    dsc: "New Haven-Style Pizza - 6 Pack (Choose Your Own)",
    price: 79,
    rate: 4,
    country: "West Haven, CT",
  },
  {
    id: "6-lou-malnatis-deep-dish-pizzas",
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106829/6-lou-malnatis-deep-dish-pizzas.f59993181da5d295668c8a6fb856055e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Lou Malnati's Pizza",
    dsc: "6 Lou Malnati's Deep Dish Pizzas",
    price: 116.99,
    rate: 4,
    country: "Chicago, IL",
  },
];

const Favorites = () => {
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

  return (
    <div className="container !px-0 my-5  h-dvh">
      <h2 className="text-primary text-2xl font-bold">Favorites</h2>
      <div className="mt-5">
        <div className="grid cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
          {!meals.length ? (
            <h3 className="text-textDark text-center text-xl font-medium !leading-snug">
              There are no current favorite meals. Add some?
            </h3>
          ) : (
            <>
              {meals.map((favorite) => (
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
        </div>
      </div>
    </div>
  );
};

export default Favorites;
