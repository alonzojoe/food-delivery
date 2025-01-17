import { useEffect } from "react";
import { setCart } from "@/store/features/cartSlice";
import { useAppDispatch } from "@/store/store";
import { type CartItem } from "@/store/features/cartSlice";
import CartItems from "@/pages/Cart/components/CartItems";

import { HiOutlineTicket } from "react-icons/hi";
import { ImSpoonKnife } from "react-icons/im";

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
    <div className="container my-5  h-screen">
      <h2 className="text-2xl mb-2 font-semibold text-primary border-primary border-b-1 decoration-dashed">
        Items in Your Cart:
      </h2>
      <div className="space-y-3">
        <CartItems />
      </div>
      <div className="mt-5 space-y-1">
        <div className="flex justify-between items-center text-md">
          <h2 className="font-bold">Subtotal</h2>
          <p className="font-bold">
            <small className="text-primary">$</small>
            {totalAmount.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between items-center text-md font-normal">
          <h2>Discount</h2>
          <p>
            <small className="text-primary">$</small>0.00
          </p>
        </div>
        <div className="flex justify-between items-center text-md font-normal">
          <h2>Delivery Fee</h2>
          <p>
            <small className="mx-5 px-3 bg-primary rounded-lg text-white">
              Free
            </small>
            <small className="text-primary">$</small>0.00
          </p>
        </div>
        <div className="flex items-center gap-2 !my-2">
          <HiOutlineTicket className="text-2xl text-primary -rotate-90" />
          <span className="font-semibold text-primary">Apply a voucher</span>
        </div>
      </div>
      <div className="mt-9">
        <>
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <ImSpoonKnife className="text-2xl text-primary inline" />
              <span className="font-semibold text-textDark inline">
                Cutlery
              </span>
            </div>
            <input
              id="custom-checkbox"
              type="checkbox"
              className="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:text-primary focus:ring-2 checked:bg-primary"
            />
          </div>
          <small className="text-gray-500 !leading-tight">
            We won&apos;t bring cutlery. Thanks for helping us reduce waste.
          </small>
        </>
      </div>
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
