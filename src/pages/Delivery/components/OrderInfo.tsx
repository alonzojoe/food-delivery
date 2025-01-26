import { MdOutlineSportsMotorsports } from "react-icons/md";
import Card from "@/components/UI/Card";
const OrderInfo = () => {
  return (
    <Card>
      <div className=" bg-white p-5 ro rounded-lg">
        <div className="flex gap-3 items-center border border-white border-b-textMuted pb-4">
          <span className="bg-primary rounded-xl p-3">
            <MdOutlineSportsMotorsports className="text-white text-3xl" />
          </span>
          <div>
            <h3 className="text-textDark font-semibold">Deliver Your Order</h3>
            <span className="text-textMuted text-md font-semibold">
              Coming within 10 minutes
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-5">
          <div>
            <h4 className="font-semibold">Order #0696969</h4>
            <span className="text-textDark">
              <small className="text-primary">$ </small>122.95{" "}
              <span className="text-textMuted text-md">
                • 2 items • COD (Cash)
              </span>
            </span>
          </div>
          <button className="py-3 px-5 bg-primary rounded-2xl text-white">
            Details
          </button>
        </div>
      </div>
    </Card>
  );
};

export default OrderInfo;
