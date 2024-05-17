import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {GET_EACH_RESTUARANT_URL} from "../utils/constants";

const RestuarantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(GET_EACH_RESTUARANT_URL);
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
            itemCards.map(item => <li key={item.card.info.id}>
                {item.card.info.name} - Rs. {(item.card.info.price/100) || (item.card.info.defaultPrice/100)}
            </li>)
        }
      </ul>

    </div>
  );
};

export default RestuarantMenu;
