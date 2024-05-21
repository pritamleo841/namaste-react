import { useParams } from "react-router";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import Shimmer from "./Shimmer";

const RestuarantMenu = () => {
  const {resId} = useParams();

  const resInfo = useRestuarantMenu(resId); //custom hook

  if (resInfo === null) {
    //since we are destructing below
    return <Shimmer />;
  }

  const { name, avgRating, sla, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  const { slaString } = sla;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 
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
