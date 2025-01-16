import { Link } from "react-router-dom";
import { ElementType } from "react";
import { CONTROL_MENUS } from "@/constants/controls";
import { useLocation } from "react-router-dom";

const Controls = () => {
  const { pathname } = useLocation();

  return (
    <div className="fixed bottom-0 w-full">
      <div className="flex items-center justify-between mx-2 p-4 px-10 bg-secondary rounded-3xl">
        {CONTROL_MENUS.map((control) => (
          <Controlitem
            Icon={control.Icon}
            isActive={pathname === control.endpoint}
            path={control.endpoint}
            key={control.id}
          />
        ))}
      </div>
    </div>
  );
};

type ControlitemProps = {
  Icon: ElementType;
  isActive: boolean;
  path: string;
};

const Controlitem = ({ Icon, isActive, path }: ControlitemProps) => {
  const classes = {
    linkClass: `p-2 ${isActive ? "rounded-full bg-primary" : ""}`,
    iconClass: `text-3xl ${isActive ? "text-white" : "text-dark"}`,
  };

  return (
    <Link to={path} className={classes.linkClass}>
      <Icon className={classes.iconClass} />
    </Link>
  );
};

export default Controls;
