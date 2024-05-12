import { restaurants } from "../utils/mockData";
import RestuarantCard from "./RestuarantCard";
import { useState } from "react";

const Body = () => {
  //local state variable
  const [listOfRestuarants, setListOfRestuarants] = useState(restaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestuarants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestuarants(filteredList);
          }}
        >
          Top Rated Restuarants
        </button>
      </div>
      <div className="res-container">
        {listOfRestuarants.map((restuarant) => (
          <RestuarantCard key={restuarant.info.id} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
