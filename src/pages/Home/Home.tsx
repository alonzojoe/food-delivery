import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import api from "@/services/api";
import Card from "@/components/UI/Card";
import { CATEGORIES } from "@/constants/category";
import CategoryItem from "@/pages/Home/components/CategoryItem";
import ImgPlaceholder from "@/assets/images/no-prev.png";

const Home = () => {
  const [menus, setMenus] = useState<
    | {
        id: string;
        img: string;
        name: string;
        dsc: string;
        price: number;
        rate: number;
        country: string;
      }[]
    | []
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("/burgers");

  useEffect(() => {
    const fetchMenus = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(`${selectedCategory}`);
        setMenus(response.data);
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`Could not fetch data: ${error?.message}`);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenus();
  }, [selectedCategory]);

  return (
    <>
      <>
        <h1 className="my-5 text-3xl font-bold text-center !leading-snug">
          What do you want to <span className="text-primary">Eat</span>?
        </h1>
      </>
      <div className="bg-secondary w-full p-4 flex items-center rounded-xl relative">
        <input
          type="text"
          className="bg-transparent text-lg p-1 font-semibold ring-0 border-0 outline-none w-full placeholder:opacity-45"
          placeholder="Search your food"
        />
        <IoSearch className="text-2xl bg-transparent absolute right-3 text-textDark opacity-85" />
      </div>
      <>
        <h3 className="my-5 text-xl font-semibold">Categories</h3>
        <div className="overflow-x-auto">
          <div className="flex gap-4">
            {CATEGORIES.map((category) => (
              <CategoryItem
                key={category.id}
                Icon={category.icon}
                isActive={category.endpoint === selectedCategory}
                label={category.name}
                endpoint={category.endpoint}
                onSelect={setSelectedCategory}
              />
            ))}
          </div>
        </div>
      </>
      <div>
        <h3 className="my-5 text-xl font-semibold">Popular</h3>
        <div className="grid cols-1 md:grid-cols-2 gap-8">
          {isLoading ? (
            <>
              <div className="bg-slate-300 h-48 rounded-lg animate-pulse"></div>
              <div className="bg-slate-300 h-48 rounded-lg animate-pulse"></div>
            </>
          ) : (
            <>
              {menus.map((menu) => (
                <Card key={menu.id}>
                  <div className="relative">
                    <img
                      src={menu.img}
                      className="w-full h-40 object-cover rounded-t-lg"
                      alt={menu.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = ImgPlaceholder;
                      }}
                    />
                  </div>
                  <div className="p-4 flex justify-between">
                    <div className="flex flex-col justify-between">
                      <div className="text-lg font-semibold text-gray-800">
                        {menu.name}
                      </div>

                      <div className="text-sm text-gray-600 font-medium">
                        ${menu.price.toFixed(2)}
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <div className="flex justify-center items-center space-x-1">
                        <TiStarFullOutline className="text-yellow-500 text-lg" />
                        <span className="text-gray-500">
                          {menu.rate.toFixed(2)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">10 min</div>
                    </div>
                  </div>
                </Card>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
