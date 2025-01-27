import { TbArrowNarrowLeft } from "react-icons/tb";

const Checkout = () => {
  return (
    <div className="container !px-0 my-1  h-dvh relative">
      <div className="border-2 shadow-md border-white border-b-primary p-3 flex items-center gap-3 pb-5 relative">
        <span>
          <TbArrowNarrowLeft className="text-primary text-2xl" />
        </span>
        <div>
          <span className="text-textDark text-lg !leading-tight block">
            Checkout
          </span>
          <span className="text-textMuted !leading-tight">
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
      <div className=""></div>
    </div>
  );
};

export default Checkout;
