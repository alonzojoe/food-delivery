import { TiPlus, TiMinus } from "react-icons/ti";

const selected = {
  id: "choose-your-own-chicago-deep-dish-pizza-4-pack",
  img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89948/chicago-deep-dish-pizza-4-pack.49927daafa8c147fe9bb2a113e56668e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  name: "My Pi Pizza",
  dsc: "Chicago Deep Dish Pizza - 4 Pack",
  price: 129,
  rate: 5,
  country: "Chicago, IL",
};

const Cart = () => {
  return (
    <div className="container my-5">
      <h2 className="text-2xl mb-5 font-semibold text-primary">Cart</h2>
      <div className="space-y-3">
        <div className="border-b-2 border-slate-300 py-5">
          <div className="flex items-center justify-between">
            <div className="bg-white rounded-2xl px-3 py-2 shadow-xl">
              <div className="flex flex-col gap-5 items-center justify-between">
                <button className="text-sm text-textDark">
                  <TiMinus className="text-md font-bold" />
                </button>
                <span className="text-md">1</span>
                <button className="text-md text-primary">
                  <TiPlus className="text-md font-bold" />
                </button>
              </div>
            </div>
            <div>
              <img
                className="w-auto h-20 object-cover rounded-lg"
                src={selected.img}
                alt={`img-${selected.name}`}
              />
            </div>
            <div>
              <span className="text-ellipsis overflow-hidden">
                {selected.name}
              </span>
            </div>
            <div>
              <span>${selected.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-slate-300 py-5">
          <div className="flex items-center justify-between">
            <div className="bg-white rounded-2xl px-3 py-2 shadow-xl">
              <div className="flex flex-col gap-5 items-center justify-between">
                <button className="text-sm text-textDark">
                  <TiMinus className="text-md font-bold" />
                </button>
                <span className="text-md">1</span>
                <button className="text-md text-primary">
                  <TiPlus className="text-md font-bold" />
                </button>
              </div>
            </div>
            <div>
              <img
                className="w-auto h-20 object-cover rounded-lg"
                src={selected.img}
                alt={`img-${selected.name}`}
              />
            </div>
            <div>
              <span className="text-ellipsis overflow-hidden">
                {selected.name}
              </span>
            </div>
            <div>
              <span>${selected.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
