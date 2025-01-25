import MapImg from "@/assets/images/maps.png";
import Card from "@/components/UI/Card";
import { MdOutlineSportsMotorsports } from "react-icons/md";
import { IoCall } from "react-icons/io5";
const Delivery = () => {
  return (
    <div
      className="h-dvh w-full relative"
      style={{
        backgroundImage: `url(${MapImg})`,
        objectFit: `cover`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
      }}
    >
      <div className="container absolute bottom-80 p-5">
        <Card>
          <div className=" bg-white p-5 ro rounded-lg">
            <div className="flex gap-3 items-center border border-white border-b-textMuted pb-4">
              <span className="bg-primary rounded-xl p-3">
                <MdOutlineSportsMotorsports className="text-white text-3xl" />
              </span>
              <div>
                <h3 className="text-textDark font-semibold">
                  Delivery Your Order
                </h3>
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
      </div>
      <div className="container absolute bottom-5 p-5">
        <Card>
          <div className=" bg-white p-5 ro rounded-lg">
            <div className="flex gap-3 items-center pb-4">
              <ol className="relative border-s border-gray-200 dark:border-textMuted">
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-primary dark:bg-primary"></div>
                  <h3 className="font-bold text-textDark">
                    Mang Inasal - Dolores CSFP
                  </h3>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Order Place • 10:00 AM
                  </time>
                </li>
                <li className="mb-0 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-primary dark:bg-primary"></div>
                  <h3 className="font-bold text-textDark">Del Rosario CSFP</h3>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Home • ETA 10:30 AM
                  </time>
                </li>
              </ol>
            </div>
            <div className="pt-5 flex items-center justify-between">
              <div className="flex gap-3 items-center pb-4">
                <span className="bg-primary rounded-full p-3">
                  <MdOutlineSportsMotorsports className="text-white text-xl" />
                </span>
                <div>
                  <h3 className="text-textDark font-semibold">
                    Juan Dela Cruz
                  </h3>
                  <span className="text-textDark">
                    <span className="text-textMuted text-md">
                      Rider • +639051234567
                    </span>
                  </span>
                </div>
              </div>
              <span className="p-3 bg-green-500 rounded-full">
                <IoCall className="text-white text-xl" />
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Delivery;
