import { type Meal } from "@/store/features/mealSlice";
import MealItem from "@/pages/Home/components/MealItem";

type MealsProps = {
  meals: Meal[] | [];
};

const Meals = ({ meals }: MealsProps) => {
  return (
    <>
      {meals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </>
  );
};

export default Meals;
