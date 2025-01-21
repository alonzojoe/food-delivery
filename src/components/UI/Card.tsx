import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  width?: string;
};

const Card = ({ children, width = "w-full" }: CardProps) => {
  return (
    <div className={`border-2 ${width} rounded-lg shadow-sm`}>{children}</div>
  );
};

export default Card;
