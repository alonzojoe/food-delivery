const selected = {
  id: "choose-your-own-chicago-deep-dish-pizza-4-pack",
  img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89948/chicago-deep-dish-pizza-4-pack.49927daafa8c147fe9bb2a113e56668e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  name: "My Pi Pizza",
  dsc: "Chicago Deep Dish Pizza - 4 Pack",
  price: 129,
  rate: 5,
  country: "Chicago, IL",
};

const Meal = () => {
  return (
    <div className="relative h-screen w-full">
      <div
        className="w-full h-64 rounded-b-3xl shadow-md"
        style={{
          backgroundImage: `url(${selected.img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Meal;
