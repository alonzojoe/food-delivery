import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import CartItems from "@/pages/Cart/components/CartItems";
import CartComputation from "@/pages/Cart/components/CartComputation";
import { setCart } from "@/store/features/cartSlice";
import { type CartItem } from "@/store/features/cartSlice";

const Cart = () => {
  const { totalAmount } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedCart = localStorage.getItem("CART");
    if (storedCart) {
      const parsedCart: CartItem[] = JSON.parse(storedCart);
      dispatch(setCart({ meals: parsedCart }));
    }
  }, [dispatch]);

  return (
    <div className="container !px-0 my-5  h-dvh">
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
