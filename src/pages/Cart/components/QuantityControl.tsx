import { TiPlus, TiMinus } from "react-icons/ti";

type QuantityControlProps = {
  quantity: number;
  onUpdateQty: (type: string) => void;
};

const QuantityControl = ({ quantity, onUpdateQty }: QuantityControlProps) => {
  return (
    <div className="bg-white rounded-2xl px-3 py-2 shadow-xl">
      <div className="flex flex-col gap-2 items-center justify-between">
        <button
          className="text-sm text-primary"
          onClick={() => onUpdateQty("increment")}
        >
          <TiPlus className="text-md font-bold" />
        </button>
        <span className="text-md font-semibold px-2">{quantity}</span>
        <button
          className="text-md text-textDark"
          onClick={() => onUpdateQty("decrement")}
        >
          <TiMinus className="text-md font-bold" />
        </button>
      </div>
    </div>
  );
};

export default QuantityControl;
