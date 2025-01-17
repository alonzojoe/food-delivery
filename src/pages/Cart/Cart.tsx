import { useEffect } from "react";
import { setCart } from "@/store/features/cartSlice";
import { useAppDispatch } from "@/store/store";
import { type CartItem } from "@/store/features/cartSlice";
import CartItems from "@/pages/Cart/components/CartItems";
import CartComputation from "@/pages/Cart/components/CartComputation";

const items = [
  {
    id: "the-gramercy-tavern-burger-4-pack",
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Gramercy Tavern",
    dsc: "The Gramercy Tavern Burger - 4 Pack",
    price: 99,
    rate: 5,
    country: "New York, NY",
    qty: 3,
  },
  {
    id: "choose-your-own-chicago-deep-dish-pizza-4-pack",
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89948/chicago-deep-dish-pizza-4-pack.49927daafa8c147fe9bb2a113e56668e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "My Pi Pizza",
    dsc: "Chicago Deep Dish Pizza - 4 Pack",
    price: 129,
    rate: 5,
    country: "Chicago, IL",
    qty: 1,
  },
  {
    id: "bo-ssam-dinner-for-4-6",
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110906/bo-ssam-dinner-for-4.c4a32e8801e2f0283e0565bbe8493149.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    name: "Momofuku",
    dsc: "Half Bo Ssäm Dinner for 4-6",
    price: 169,
    rate: 4,
    country: "New York, NY",
    qty: 1,
  },
];

const Cart = () => {
  const dispatch = useAppDispatch();

  const totalAmount = items.reduce(
    (total, curr) => total + curr.price * curr.qty,
    0
  );

  useEffect(() => {
    const storedCart = localStorage.getItem("CART");
    if (storedCart) {
      const parsedCart: CartItem[] = JSON.parse(storedCart);
      dispatch(setCart({ meals: parsedCart }));
    }
  }, [dispatch]);

  return (
    <div className="container my-5  h-dvh">
      <h2 className="text-2xl mb-2 font-semibold text-primary border-primary border-b-1 decoration-dashed">
        Items in Your Cart:
      </h2>
      <div className="space-y-3">
        <CartItems />
      </div>
      <CartComputation totalAmount={totalAmount} />
      <div className="flex justify-between items-center text-md my-5">
        <h2 className="font-bold">
          Total <small className="text-gray-400">(inc. VAT)</small>
        </h2>
        <p className="font-bold">
          <small className="text-primary">$</small>
          {totalAmount.toFixed(2)}
        </p>
      </div>
      <div className="w-full">
        <button className="bg-primary p-4 text-sm font-normal w-full text-white rounded-2xl">
          Review Payment and Address
        </button>
      </div>
    </div>
  );
};

export default Cart;
