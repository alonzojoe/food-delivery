import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  width?: string;
  shrink?: string;
};

const Card = ({ children, width = "w-full", shrink }: CardProps) => {
  console.log("card width", width);
  return (
    <div className={`border-2 ${width} ${shrink} rounded-lg shadow-sm`}>
      {children}
    </div>
  );
};

export default Card;
