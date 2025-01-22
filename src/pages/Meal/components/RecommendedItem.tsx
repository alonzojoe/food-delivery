import Card from "@/components/UI/Card";
import type { Meal } from "@/store/features/mealSlice";
import { FaEye } from "react-icons/fa";
import ImgPlaceholder from "@/assets/images/no-prev.png";

type RecommendedItemProps = {
  meal: Meal;
};

const RecommendedItem = ({ meal }: RecommendedItemProps) => {
  return (
    <Card key={meal.id} width="w-[150px]" shrink="shrink-0">
      <div className="relative">
        <img
          src={meal.img}
          className="w-full h-20 object-cover object-center rounded-t-lg"
          alt={meal.name}
          onError={(e) => {
            (e.target as HTMLImageElement).src = ImgPlaceholder;
          }}
        />
      </div>
      <div className="p-3">
        <div className="text-sm font-semibold text-gray-800 text-wrap">
          {meal.name}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span>
            <h4 className="text-md font-semibold">
              <small className="text-primary">$ </small> {meal.price.toFixed(2)}
            </h4>
          </span>
          <span>
            <FaEye className="text-primary text-xl" />
          </span>
        </div>
      </div>
    </Card>
  );
};

export default RecommendedItem;
