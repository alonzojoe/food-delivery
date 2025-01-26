import Card from "@/components/UI/Card";
import { IoCall } from "react-icons/io5";
import driverImg from "@/assets/images/driver2x2.jpg";
const LocationInfo = () => {
  return (
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
            {/* <span className="bg-primary rounded-full p-3">
                  <MdOutlineSportsMotorsports className="text-white text-xl" />
                </span> */}
            <img
              className="rounded-full h-auto w-[50px] object-cover"
              src={driverImg}
              alt="driver"
            />
            <div>
              <h3 className="text-textDark font-semibold">Noli C. Cruz</h3>
              <span className="text-textDark">
                <span className="text-textMuted text-md">
                  Rider • +639364008318
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
  );
};

export default LocationInfo;
