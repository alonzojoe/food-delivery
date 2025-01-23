import { useState } from "react";
import QuantityControl from "@/pages/Cart/components/QuantityControl";
import { type CartItem } from "@/store/features/cartSlice";
import { BsFillTrash3Fill } from "react-icons/bs";

type CartItemProps = {
  item: CartItem;
  onRemove: (selectedMeal: CartItem) => void;
};

const CartItem = ({ item, onRemove }: CartItemProps) => {
  const [quantity, setQuantity] = useState(() => item.quantity);

  const handleQuantity = (type: string) => {
    setQuantity((prevQty) => {
      if (type === "increment") {
        return prevQty + 1;
      } else {
        if (prevQty === 1) onRemove(item);
        return prevQty - 1;
      }
    });
  };

  return (
    <div className="border-b-2 border-slate-300 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <div className="flex-shrink-0">
            <img
              className="w-auto h-16 object-cover rounded-lg"
              src={item.img}
              alt={`img-${item.name}`}
            />
          </div>
          <div>
            {/* text-ellipsis whitespace-nowrap overflow-hidden */}
            <span
              className="text-md text-primary font-semibold"
              title={item.name} // Tooltip for full name
            >
              {item.name}
            </span>
            <span className="block mt-1 text-sm text-slate-500 font-semibold">
              <small className="text-primary">$</small>
              {(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex gap-2 justify-end items-center">
          <QuantityControl onUpdateQty={handleQuantity} quantity={quantity} />
          <div>
            <span className="cursor-pointer" onClick={() => onRemove(item)}>
              <BsFillTrash3Fill className="text-md text-red-500" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
