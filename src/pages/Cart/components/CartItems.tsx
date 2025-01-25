import { useAppSelector, useAppDispatch } from "@/store/store";
import CartItem from "@/pages/Cart/components/CartItem";
import { removeCartItem } from "@/store/features/cartSlice";
import { type CartItem as CartItemType } from "@/store/features/cartSlice";
import { updateCartItem } from "@/store/features/cartSlice";
import { useState } from "react";
const CartItems = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  const [count, setCount] = useState(1);
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

  const handleUpdateCartItem = (
    selectedMeal: CartItemType,
    updatedQty: number
  ) => {
    console.log("onUpdateCartItem");
    console.log("selectedMeal", selectedMeal);
    console.log("updatedQty", updatedQty);

    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === selectedMeal.id) {
        return { ...cartItem, quantity: updatedQty };
      }
      return cartItem;
    });

    localStorage.setItem("CART", JSON.stringify(updatedCart));
    dispatch(updateCartItem({ item: selectedMeal, updatedQty }));
  };

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>test {count}</button>
      {cart.map((item) => (
        <CartItem
          onRemove={handleRemove}
          onUpdateQty={handleUpdateCartItem}
          item={item}
          key={item.id}
        />
      ))}
    </>
  );
};

export default CartItems;
