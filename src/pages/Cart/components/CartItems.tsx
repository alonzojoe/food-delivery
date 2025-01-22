import { useAppSelector, useAppDispatch } from "@/store/store";
import CartItem from "@/pages/Cart/components/CartItem";
import useLocalStorage from "@/hooks/useLocalStorage";
import { removeCartItem } from "@/store/features/cartSlice";
import { type CartItem as CartItemType } from "@/store/features/cartSlice";

const CartItems = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  const handleRemove = (selectedMeal: CartItemType) => {
    const currentCart = [...cart];
    const itemIndex = currentCart.findIndex(
      (cartItem) => cartItem.id === selectedMeal.id
    );

    if (itemIndex !== -1) {
      currentCart.splice(itemIndex, 1);
    }

    localStorage.setItem("CART", JSON.stringify(currentCart));
    dispatch(removeCartItem({ id: selectedMeal.id }));
  };

  return (
    <>
      {cart.map((item) => (
        <CartItem onRemove={handleRemove} item={item} key={item.id} />
      ))}
    </>
  );
};

export default CartItems;
