import QuantityControl from "@/pages/Cart/components/QuantityControl";
import { type CartItem } from "@/store/features/cartSlice";
import { BsFillTrash3Fill } from "react-icons/bs";

type CartItemProps = {
  item: CartItem;
};

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="border-b-2 border-slate-300 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <div>
            <img
              className="w-auto h-16 object-cover rounded-lg"
              src={item.img}
              alt={`img-${item.name}`}
            />
          </div>
          <div>
            <span className="text-md text-primary font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
              {item.name}
            </span>
            <span className="block mt-1 text-sm text-slate-500 font-semibold">
              <small className="text-primary">$</small>
              {(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex gap-2 justify-end items-center">
          <QuantityControl quantity={item.quantity} />
          <div>
            <span className="cursor-pointer">
              <BsFillTrash3Fill className="text-md text-red-500" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
