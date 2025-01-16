import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { addToCart, setCart } from "@/store/features/cartSlice";
import { useState } from "react";
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

// const selected = {
//   id: "choose-your-own-chicago-deep-dish-pizza-4-pack",
//   img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89948/chicago-deep-dish-pizza-4-pack.49927daafa8c147fe9bb2a113e56668e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
//   name: "My Pi Pizza",
//   dsc: "Chicago Deep Dish Pizza - 4 Pack",
//   price: 129,
//   rate: 5,
//   country: "Chicago, IL",
// };

const Meal = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [choosenMeal] = useLocalStorage<Meal | null>("CHOOSEN_MEAL", null);

  const { cart } = useAppSelector((state) => state.cart);

  const [count, setCount] = useState(1);

  const isMounted = useRef(false);
  useEffect(() => {
    const storedCart = localStorage.getItem("CART");
    if (storedCart) {
      const parsedCart: CartItem[] = JSON.parse(storedCart);
      dispatch(setCart({ meals: parsedCart }));
    }

    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, [dispatch]);

  useEffect(() => {
    if (isMounted.current) {
      console.log("effect setlocalStorage runs");
      localStorage.setItem("CART", JSON.stringify(cart));
    }

    console.log("current cart items", cart);
  }, [cart]);

  const addItem = (selectedItem: CartItem) => {
    dispatch(addToCart({ item: selectedItem }));
    console.log("updated cart", cart);
  };

  if (!choosenMeal) return <Navigate to={"/home"} />;

  return (
    <div className="h-screen w-full relative">
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
        <button className="bg-white absolute top-5 right-5 shadow-lg p-4 rounded-lg">
          <FaRegHeart className="text-xl" />
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
      <div className="mt-16 container h-full">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl">{choosenMeal.name}</h2>
          <div>
            <span className="text-xl text-primary font-semibold">$</span>
            <span className="text-2xl text-textDark font-semibold">
              {choosenMeal.price.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="my-8 flex justify-between items-center px-3">
          <div className="flex items-center gap-2">
            <FaMotorcycle className="text-warning text-3xl" />
            <span className="font-semibold text-lg">Free</span>
          </div>
          <div className="flex items-center gap-2">
            <LuAlarmClock className="text-danger text-3xl" />
            <span className="font-semibold text-lg">15-30min</span>
          </div>
          <div className="flex items-center gap-2">
            <TiStarFullOutline className="text-primary text-3xl" />
            <span className="font-semibold text-lg">
              {choosenMeal.rate.toFixed(1)}
            </span>
          </div>
        </div>
        <div className="my-5">
          <h2 className="text-textDarky font-semibold text-xl">About</h2>
          <p className="text-textMuted text-lg">{choosenMeal.dsc}</p>
        </div>
        <div className="my-5">
          <h2 className="text-textDarky font-semibold text-xl">Popular In</h2>
          <p className="text-textMuted text-lg">{choosenMeal.country}</p>
        </div>
      </div>

      <div className="fixed bottom-5 w-full px-5">
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
      </div>
    </div>
  );
};

export default Meal;
