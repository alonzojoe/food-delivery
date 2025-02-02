import { IoSearch } from "react-icons/io5";
import { URLSearchParamsInit } from "react-router-dom";

type InputSearchProps = {
  setParams: (
    params:
      | URLSearchParamsInit
      | ((prevParams: URLSearchParams) => URLSearchParams),
    options?: { replace?: boolean; state?: unknown }
  ) => void;
  keywordValue: string;
};

const InputSearch = ({ setParams, keywordValue }: InputSearchProps) => {
  return (
    <div className="bg-secondary w-full p-4 flex items-center rounded-xl relative">
      <input
        type="text"
        className="bg-transparent text-lg p-1 font-semibold ring-0 border-0 outline-none w-full placeholder:opacity-45"
        placeholder="Search your food"
        onChange={(e) =>
          setParams(
            (prev) => {
              prev.set("keyword", e.target.value);
              return prev;
            },
            { replace: true }
          )
        }
        value={keywordValue}
      />
      <IoSearch className="text-2xl bg-transparent absolute right-3 text-textDark opacity-85" />
    </div>
  );
};

export default InputSearch;
