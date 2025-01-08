import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className="border-2 w-full rounded-lg shadow-sm">{children}</div>;
};

export default Card;
