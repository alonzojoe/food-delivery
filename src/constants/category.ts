
import { Category } from "@/types/category"
import { FaAward } from "react-icons/fa6";
import { GiMeat, GiSteak, GiChickenOven, GiSausage, GiSlicedBread, GiChocolateBar } from "react-icons/gi";
import { LuPizza, LuSandwich, LuDessert } from "react-icons/lu";
import { PiHamburgerFill, PiIceCreamFill } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";
import { RiDrinks2Fill } from "react-icons/ri";




export const CATEGORIES: Category[] = [
    {
        id: 1,
        name: "Best",
        endpoint: `/best-foods`,
        icon: FaAward
    },
    {
        id: 2,
        name: "Burger",
        endpoint: `/burgers`,
        icon: PiHamburgerFill
    },
    {
        id: 3,
        name: "Pizza",
        endpoint: `/pizzas`,
        icon: LuPizza
    },
    {
        id: 4,
        name: "Sandwich",
        endpoint: `/sandwiches`,
        icon: LuSandwich
    },
    {
        id: 5,
        name: "Steak",
        endpoint: `/steaks`,
        icon: GiSteak
    },
    {
        id: 6,
        name: "Barbeque",
        endpoint: `/bbqs`,
        icon: GiMeat
    },
    {
        id: 7,
        name: "Fried Chicken",
        endpoint: `/fried-chicken`,
        icon: GiChickenOven
    },
    {
        id: 8,
        name: "Pork",
        endpoint: `/pork`,
        icon: TbMeat
    },
    {
        id: 9,
        name: "Sausage",
        endpoint: `/sausages`,
        icon: GiSausage
    },
    {
        id: 10,
        name: "Bread",
        endpoint: `/breads`,
        icon: GiSlicedBread
    },
    {
        id: 11,
        name: "Drink",
        endpoint: `/drinks`,
        icon: RiDrinks2Fill
    },
    {
        id: 12,
        name: "Ice Cream",
        endpoint: `/ice-cream`,
        icon: PiIceCreamFill
    },
    {
        id: 13,
        name: "Dessert",
        endpoint: `/desserts`,
        icon: LuDessert
    },
    {
        id: 14,
        name: "Chocolate",
        endpoint: `/chocolates`,
        icon: GiChocolateBar
    }
]