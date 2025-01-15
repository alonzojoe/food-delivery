import CategoryItem from "@/pages/Home/components/CategoryItem";
import { type Category } from "@/types/category";

type CategoriesProps = {
  categories: Category[];
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
};

const Categories = ({
  categories,
  selectedCategory,
  setCategory,
}: CategoriesProps) => {
  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              Icon={category.icon}
              isActive={category.endpoint === selectedCategory}
              label={category.name}
              endpoint={category.endpoint}
              onSelect={setCategory}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
