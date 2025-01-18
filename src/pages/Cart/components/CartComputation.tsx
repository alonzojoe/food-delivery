import { HiOutlineTicket } from "react-icons/hi";
import { ImSpoonKnife } from "react-icons/im";

type CartComputationProps = {
  totalAmount: number;
};

const CartComputation = ({ totalAmount }: CartComputationProps) => {
  return (
    <>
      <table className="mt-5 border-collapse w-full">
        <tbody>
          <tr>
            <td className="text-left">
              <h2 className="font-bold">Subtotal</h2>
            </td>
            <td className="text-right">
              <p className="font-bold">
                <small className="text-primary">$ </small>
                {totalAmount.toFixed(2)}
              </p>
            </td>
          </tr>
          <tr>
            <td className="text-left">
              <h2>Discount</h2>
            </td>
            <td className="text-right">
              <p>
                <small className="text-primary">$</small>0.00
              </p>
            </td>
          </tr>
          <tr>
            <td className="text-left">
              <h2>Delivery Fee</h2>
            </td>
            <td className="text-right">
              <p>
                <small className="mx-5 px-3 bg-primary rounded-lg text-white">
                  Free
                </small>
                <small className="text-primary">$</small>0.00
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div className="flex items-center gap-2 !my-2">
                <HiOutlineTicket className="text-2xl text-primary -rotate-90" />
                <span className="font-semibold text-primary">
                  Apply a voucher
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-5">
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
    </>
  );
};

export default CartComputation;
