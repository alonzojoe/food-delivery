import { ControlItem } from "@/types/controls";
import { FaHeart, FaUser } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";

export const CONTROL_MENUS: ControlItem[] = [
    {
        id: 1,
        name: 'Home',
        Icon: AiFillHome,
        endpoint: '/home'
    },
    {
        id: 2,
        name: 'Favorites',
        Icon: FaHeart,
        endpoint: '/home/favorites'
    },
    {
        id: 3,
        name: 'Cart',
        Icon: IoMdCart,
        endpoint: '/home/cart'
    },
    {
        id: 4,
        name: 'Profile',
        Icon: FaUser,
        endpoint: '/home/profile'
    },

]