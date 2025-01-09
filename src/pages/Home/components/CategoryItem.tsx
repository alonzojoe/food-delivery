import React from "react";

type CategoryItemProps = {
  Icon: React.ElementType;
  label: string;
  isActive: boolean;
  endpoint: string;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
};

const CategoryItem = ({
  Icon,
  label,
  isActive,
  onSelect,
  endpoint,
}: CategoryItemProps) => {
  const btnClass = {
    btn: `py-2 px-3 rounded-2xl flex gap-2 items-center cursor-pointer ${
      isActive ? "bg-primary" : "bg-secondary"
    }`,
    spanIcon: `p-1 rounded-lg ${isActive ? "bg-white" : "bg-secondary"}`,
    icon: `${isActive ? "text-primary" : "text-dark"} text-xl`,
    spanLabel: `${
      isActive ? "text-white" : "text-dark"
    } text-md whitespace-nowrap`,
  };

  return (
    <button className={btnClass.btn} onClick={() => onSelect(endpoint)}>
      <span className={btnClass.spanIcon}>
        <Icon className={btnClass.icon} />
      </span>
      <span className={btnClass.spanLabel}>{label}</span>
    </button>
  );
};

export default CategoryItem;
