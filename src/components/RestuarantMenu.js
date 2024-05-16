import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestuarantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=515520&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };

  if (resInfo === null) {
    //since we are destructing below
    return <Shimmer />;
  }

  const { name, avgRating, sla, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  const { slaString } = sla;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <h3>{avgRating}</h3>
      <h3>{slaString}</h3>

      <ul>
        {
            itemCards.map(item => <li>
                {item.card.info.name} - Rs. {(item.card.info.price/100) || (item.card.info.defaultPrice/100)}
            </li>)
        }
      </ul>

    </div>
  );
};

export default RestuarantMenu;
