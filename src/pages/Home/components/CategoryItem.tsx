import React from "react";

type CategoryItemProps = {
  Icon: React.ElementType;
  label: string;
  isActive: boolean;
};

const CategoryItem = ({ Icon, label, isActive }: CategoryItemProps) => {
  const btnClass = {
    btn: isActive
      ? `bg-primary py-2 px-3 rounded-2xl flex gap-2 items-center`
      : `bg-secondary py-2 px-3 rounded-2xl flex gap-2 items-center`,
    spanIcon: isActive
      ? `bg-white p-1 rounded-lg`
      : `bg-secondary p-1 rounded-lg`,
    icon: isActive ? `text-primary text-xl` : `text-dark text-xl`,
    spanLabel: isActive ? `text-white text-md` : `text-dark text-md`,
  };

  return (
    <button className={btnClass.btn}>
      <span className={btnClass.spanIcon}>
        <Icon className={btnClass.icon} />
      </span>
      <span className={btnClass.spanLabel}>{label}</span>
    </button>
  );
};

export default CategoryItem;
