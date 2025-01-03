import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className="">{children}</div>;
};

export default Card;
