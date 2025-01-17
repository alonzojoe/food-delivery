import { useAppSelector } from "@/store/store";
import CartItem from "@/pages/Cart/components/CartItem";

const CartItems = () => {
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <>
      {cart.map((item) => (
        <CartItem item={item} />
      ))}
    </>
  );
};

export default CartItems;
