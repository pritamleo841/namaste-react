import { useState } from "react";
import { useParams } from "react-router";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import Shimmer from "./Shimmer";
import RestuarantCategory from "./RestuarantCategory";

const RestuarantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestuarantMenu(resId); //custom hook

  if (resInfo === null) {
    //since we are destructing below
    return <Shimmer />;
  }

  const { name, avgRating, sla, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(",")} - {costForTwoMessage}
        </p>
        <div className="text-lg">
          <p>
            {avgRating} - {sla.slaString}
          </p>
        </div>
      
        {categories.map((category, index) => (
          //controlled component
          <RestuarantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
    </div>
  );
};

export default RestuarantMenu;
