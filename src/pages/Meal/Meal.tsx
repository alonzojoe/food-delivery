import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { addToCart, setCart } from "@/store/features/cartSlice";
import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import { TiStarFullOutline } from "react-icons/ti";
import { TiPlus, TiMinus } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import { FaMotorcycle } from "react-icons/fa6";
import { TbArrowNarrowLeft } from "react-icons/tb";
import { useNavigate, Navigate } from "react-router-dom";
import { type Meal } from "@/store/features/mealSlice";
import { type CartItem } from "@/store/features/cartSlice";
import useLocalStorage from "@/hooks/useLocalStorage";
import { addOrRemoveItem, setFavorites } from "@/store/features/favoriteSlice";
import { FaHeart } from "react-icons/fa";
import { fetchMeals } from "@/store/thunks/mealThunks";
import Recommended from "@/pages/Meal/components/Recommended";

const Meal = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  const { meals, isLoading } = useAppSelector((state) => state.meal);
  const [choosenMeal] = useLocalStorage<Meal | null>("CHOOSEN_MEAL", null);
  const [favoriteMeals, setFavoriteMeals] = useLocalStorage<Meal[]>(
    "FAVORITES",
    []
  );
  const [storedItems, setStoredItems] = useLocalStorage<CartItem[]>("CART", []);

  const [count, setCount] = useState(() => {
    const existingItem = storedItems.find(
      (storedItem) => storedItem.id === choosenMeal?.id
    );

    return existingItem ? existingItem.quantity : 1;
  });

  // const { meals } = useAppSelector((state) => state.favorites);

  useEffect(() => {
    const storedCart = localStorage.getItem("CART");
    const storedCategory = localStorage.getItem("RECOMMENDED_CATEGORY");
    if (storedCart) {
      const parsedCart: CartItem[] = JSON.parse(storedCart);
      dispatch(setCart({ meals: parsedCart }));
    }
    if (favoriteMeals) {
      dispatch(setFavorites({ meals: favoriteMeals }));
    }
    if (storedCategory) {
      dispatch(fetchMeals(storedCategory));
    }
    console.log("f");
  }, [dispatch]);

  const inCart = storedItems.some((item) => item.id === choosenMeal?.id);

  const addItem = (selectedItem: CartItem) => {
    const updatedCart: CartItem[] = [...cart];

    const existingItemIdx = updatedCart.findIndex(
      (item) => item.id === selectedItem.id
    );

    if (existingItemIdx !== -1) {
      updatedCart[existingItemIdx] = selectedItem;
    } else {
      updatedCart.push(selectedItem);
    }

    // localStorage.setItem("CART", JSON.stringify(updatedCart));
    setStoredItems(updatedCart);
    dispatch(addToCart({ item: selectedItem }));
    console.log("updated cart", cart);
  };

  const handleAddRemoveItem = (item: Meal) => {
    console.log(favoriteMeals);
    if (favoriteMeals && choosenMeal) {
      const currentFavorites: Meal[] = favoriteMeals;

      const existed = currentFavorites.some(
        (fav) => fav.id === choosenMeal?.id
      );

      if (existed) {
        const filteredFavorite = currentFavorites.filter(
          (fav) => fav.id !== choosenMeal.id
        );
        setFavoriteMeals(filteredFavorite);
        console.log("filteredMeals", filteredFavorite);
      } else {
        setFavoriteMeals([...currentFavorites, item]);
        console.log("newFavoriteMeals", [...currentFavorites, item]);
      }
    }

    dispatch(addOrRemoveItem({ meal: item }));
  };

  if (!choosenMeal) return <Navigate to={"/home"} />;

  const isFavorite = favoriteMeals.some((fav) => fav.id === choosenMeal.id);

  return (
    <div className="h-dvh w-full relative">
      <div className="relative">
        <div
          className="w-full h-72 rounded-b-3xl shadow-md"
          style={{
            backgroundImage: `url(${choosenMeal.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <button
          className="bg-white absolute top-5 left-5 shadow-lg p-4 rounded-lg"
          onClick={() => navigate(-1)}
        >
          <TbArrowNarrowLeft className="text-xl" />
        </button>
        <button
          onClick={() => handleAddRemoveItem(choosenMeal)}
          className="bg-white absolute top-5 right-5 shadow-lg p-4 rounded-lg"
        >
          {isFavorite ? (
            <FaHeart className="text-xl text-primary" />
          ) : (
            <FaRegHeart className="text-xl" />
          )}
        </button>
        <div className="bg-white flex items-center gap-5 rounded-2xl px-5 py-3  absolute -bottom-5 left-1/2 -translate-x-1/2 shadow-xl">
          <button
            className="text-2xl text-textDark"
            onClick={() =>
              setCount((prev) => {
                if (prev === 1) return 1;
                return prev - 1;
              })
            }
          >
            <TiMinus />
          </button>
          <span className="text-3xl">{count}</span>
          <button
            className="text-2xl text-primary"
            onClick={() => setCount((prev) => prev + 1)}
          >
            <TiPlus />
          </button>
        </div>
      </div>
      <div className="mt-11 container space-y-3">
        <div className="flex justify-between items-center text-textDark ">
          <h3 className="font-bold text-xl">{choosenMeal.name}</h3>
          <div>
            <small className="text-primary text-lg font-semibold">$ </small>
            <span className="text-xl font-semibold">
              {choosenMeal.price.toFixed(2)}
            </span>
          </div>
        </div>
        {/* delivery details */}
        <div className="flex justify-between items-center px-3">
          <div className="flex items-center gap-2">
            <FaMotorcycle className="text-warning text-2xl" />
            <span className="font-semibold text-base text-textDark">Free</span>
          </div>
          <div className="flex items-center gap-2">
            <LuAlarmClock className="text-danger text-2xl" />
            <span className="font-semibold text-base text-textDark">
              15-30min
            </span>
          </div>
          <div className="flex items-center gap-2">
            <TiStarFullOutline className="text-primary text-2xl" />
            <span className="font-semibold text-base text-textDark">
              {choosenMeal.rate.toFixed(1)}
            </span>
          </div>
        </div>
        {/* delivery details */}
        {/* about */}
        <div>
          <h4 className="text-textDarky font-semibold text-lg">About</h4>
          <p className="text-textGray text-md">{choosenMeal.dsc}</p>
        </div>
        {/* about */}
        {/* popular */}
        <div>
          <h3 className="text-textDarky font-semibold text-lg">Popular In</h3>
          <p className="text-textGray text-md">{choosenMeal.country}</p>
        </div>
        {/* popular */}
        {/* recommended */}
        <div className="pb-20">
          <h2 className="text-textDarky font-semibold text-lg">Recommended</h2>
          <Recommended meals={meals} isLoading={isLoading} choosenMeal={choosenMeal} />
        </div>
        {/* recommended */}
      </div>

      {/* <div className="fixed bottom-5 w-full px-5">
        <button
          onClick={() =>
            addItem({
              ...choosenMeal,
              quantity: count,
              amount: choosenMeal.price,
            })
          }
          className="bg-primary p-5 text-xl font-semibold w-full text-white rounded-2xl"
        >
          Add To Cart (${(choosenMeal.price * count).toFixed(2)})
        </button>
      </div> */}
      <div className="bg-white w-full border-t border-text-muted p-5 fixed bottom-0">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            <small className="text-primary">$</small>{" "}
            {(choosenMeal.price * count).toFixed(2)}
          </h2>
          <button
            onClick={() =>
              addItem({
                ...choosenMeal,
                quantity: count,
                amount: choosenMeal.price,
              })
            }
            className="bg-primary p-3 text-lg font-semibold text-white rounded-xl flex items-center gap-2"
          >
            <IoMdCart className="inline-block" /> {inCart ? "Update" : "Add To"}{" "}
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
