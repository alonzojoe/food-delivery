import { Fragment } from "react/jsx-runtime";
import Card from "@/components/UI/Card";
import ImgPlaceholder from "@/assets/images/no-prev.png";
import { TiStarFullOutline } from "react-icons/ti";
import { type Meal } from "@/store/features/mealSlice";
import { useNavigate } from "react-router-dom";

type MealItemProps = {
  meal: Meal;
};

const MealItem = ({ meal }: MealItemProps) => {
  const navigate = useNavigate();

  const selectMeal = (meal: Meal) => {
    localStorage.setItem("CHOOSEN_MEAL", JSON.stringify(meal));

    navigate(`/meal/${meal.id}`);
  };

  return (
    <div className="cursor-pointer" onClick={() => selectMeal(meal)}>
      <Card key={meal.id}>
        <div className="relative">
          <img
            src={meal.img}
            className="w-full h-40 object-cover rounded-t-lg"
            alt={meal.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = ImgPlaceholder;
            }}
          />
        </div>
        <div className="p-4 flex justify-between">
          <div className="flex flex-col justify-between">
            <div className="text-lg font-semibold text-gray-800">
              {meal.name}
            </div>

            <div className="text-sm text-gray-600 font-medium">
              <small className="text-primary">$</small> {meal.price.toFixed(2)}
            </div>
          </div>

          <div className="flex flex-col items-end justify-between">
            <div className="flex justify-center items-center space-x-1">
              <TiStarFullOutline className="text-yellow-500 text-lg" />
              <span className="text-gray-500">{meal.rate.toFixed(2)}</span>
            </div>
            <div className="text-sm text-gray-500">10 min</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MealItem;
