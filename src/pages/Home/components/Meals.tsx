import { type Meal } from "@/store/features/mealSlice";
import MealItem from "@/pages/Home/components/MealItem";

type MealsProps = {
  meals: Meal[] | [];
  selectedCategory: string;
};

const Meals = ({ meals, selectedCategory }: MealsProps) => {
  return (
    <>
      {meals.map((meal) => (
        <MealItem
          selectedCategory={selectedCategory}
          meal={meal}
          key={meal.id}
        />
      ))}
    </>
  );
};

export default Meals;
