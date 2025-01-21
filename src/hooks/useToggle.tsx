import { useState } from "react";

const useToggle = (
  defaultValue: boolean
): [boolean, (newValue?: boolean) => void] => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (newValue?: boolean) => {
    setValue((prevValue) =>
      typeof newValue === "boolean" ? newValue : !prevValue
    );
  };

  return [value, toggleValue];
};

export default useToggle;
