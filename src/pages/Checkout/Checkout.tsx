import { TbArrowNarrowLeft } from "react-icons/tb";

const Checkout = () => {
  return (
    <div className="container !px-0  h-dvh relative">
      <div className="border-2 shadow-md border-white border-b-primary p-3 flex items-center gap-3 pb-5 relative">
        <span>
          <TbArrowNarrowLeft className="text-primary text-2xl" />
        </span>
        <div>
          <span className="text-textDark text-lg font-semibold !leading-tight block">
            Checkout
          </span>
          <span className="text-textMuted text-md !leading-tight">
            Del Rosario CSFP
          </span>
        </div>
        <div className="absolute -bottom-10 left-8 flex flex-col items-center">
          <div className="bg-primary w-7 h-7 flex items-center justify-center p-4 rounded-full text-center">
            <span className="text-white text-sm">1</span>
          </div>
          <span className="text-center text-textMuted !leading-tight mt-1">
            Menu
          </span>
        </div>

        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="bg-primary w-7 h-7 flex items-center justify-center p-4 rounded-full text-center">
            <span className="text-white text-sm">2</span>
          </div>
          <span className="text-center text-textMuted !leading-tight mt-1">
            Cart
          </span>
        </div>

        <div className="absolute -bottom-10 right-6 flex flex-col items-center">
          <div className="bg-primary w-7 h-7 flex items-center justify-center p-4 rounded-full text-center">
            <span className="text-white text-sm">3</span>
          </div>
          <span className="text-center text-textMuted !leading-tight mt-1">
            Checkout
          </span>
        </div>
      </div>
      <div className="bg-white w-full border-t border-text-muted p-5 fixed bottom-0">
        <div className="flex justify-between items-center text-md mb-2">
          <h2 className="font-bold">
            Total <small className="text-gray-400">(inc. VAT)</small>
          </h2>
          <p className="font-bold">
            <small className="text-primary">$</small>
            129.00
          </p>
        </div>
        <button className="bg-primary p-3 text-lg font-semibold text-white rounded-xl w-full mb-3">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
