import type { Meal } from "@/store/features/mealSlice"

export const capitalizedFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}


export const pickRecommended = (meals: Meal[], count: number, except: Meal): Meal[] => {
    if (count > meals.length) {
        throw new Error('An error occured')
    }

    const copiedMeals = meals.filter((meal) => meal.id !== except.id)

    for (let i = copiedMeals.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)) as number
        [copiedMeals[i], copiedMeals[j]] = [copiedMeals[j], copiedMeals[i]];

    }

    return copiedMeals.slice(0, count)
} 
