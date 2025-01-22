import React from "react";
import { pickRecommended } from "@/libs/utils";
import { Meal } from "@/store/features/mealSlice";
import RecommendedItem from "@/pages/Meal/components/RecommendedItem";
import SkeletonItem from "./SkeletonItem";

type RecommendedProps = {
  meals: Meal[];
  choosenMeal: Meal;
  isLoading: boolean;
};

const SKELETON_COUNT = Array.from({ length: 20 }, (_, index) => index + 1);

const Recommended = React.memo(
  ({ meals, choosenMeal, isLoading }: RecommendedProps) => {
    const Loader: React.ReactElement | null = isLoading ? (
      <>
        {SKELETON_COUNT.map((count) => (
          <SkeletonItem key={count} />
        ))}
      </>
    ) : null;

    return (
      <div className="overflow-x-auto">
        <div className="flex space-x-4 whitespace-nowrap py-4">
          {Loader ? (
            Loader
          ) : (
            <>
              {meals.length > 0 ? (
                <>
                  {pickRecommended(meals, 20, choosenMeal).map((meal) => (
                    <RecommendedItem key={meal.id} meal={meal} />
                  ))}
                </>
              ) : (
                <p>There are no recommended items.</p>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
);

export default Recommended;
