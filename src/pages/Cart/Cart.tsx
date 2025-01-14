import { TiPlus, TiMinus } from "react-icons/ti";
import { BsFillTrash3Fill } from "react-icons/bs";
import { HiOutlineTicket } from "react-icons/hi";
import { ImSpoonKnife } from "react-icons/im";
const selected = {
  id: "choose-your-own-chicago-deep-dish-pizza-4-pack",
  img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89948/chicago-deep-dish-pizza-4-pack.49927daafa8c147fe9bb2a113e56668e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  name: "My Pi Pizza",
  dsc: "Chicago Deep Dish Pizza - 4 Pack",
  price: 129,
  rate: 5,
  country: "Chicago, IL",
};

const items = [1, 2];

const Cart = () => {
  return (
    <div className="container my-5">
      <h2 className="text-2xl mb-2 font-semibold text-primary">Cart</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <div className="border-b-2 border-slate-300 py-2" key={item}>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-3">
                <div>
                  <img
                    className="w-auto h-16 object-cover rounded-lg"
                    src={selected.img}
                    alt={`img-${selected.name}`}
                  />
                </div>
                <div>
                  <span className="text-md text-primary font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
                    {selected.name}
                  </span>
                  <span className="block mt-1 text-sm text-slate-500 font-semibold">
                    <small className="text-primary">$</small>
                    {selected.price.toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 justify-end items-center">
                <div className="bg-white rounded-2xl px-3 py-2 shadow-xl">
                  <div className="flex flex-col gap-2 items-center justify-between">
                    <button className="text-sm text-primary">
                      <TiPlus className="text-md font-bold" />
                    </button>
                    <span className="text-md font-semibold px-2">1</span>
                    <button className="text-md text-textDark">
                      <TiMinus className="text-md font-bold" />
                    </button>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <BsFillTrash3Fill className="text-md text-red-500" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
