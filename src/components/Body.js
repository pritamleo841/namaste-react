import RestuarantCard,{withVegLabel} from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { GET_RESTUARANT_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //local state variable
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log('list',listOfRestuarants);
  const RestuarantCardIsVeg = withVegLabel(RestuarantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(GET_RESTUARANT_URL);
    const jsonData = await data.json();
    const apiData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestuarants(apiData);
    setFilteredResturant(apiData);
  };

  //check online status - custom hook
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you're offline...Please check your internet connection 😀😀😀</h1>
  }

  //Conditional Rendering
  return listOfRestuarants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between m-4">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-1 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestuarants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResturant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-4 py-1 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestuarants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setListOfRestuarants(filteredList);
            }}>
            Top Rated Restuarants
          </button>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4 m-4">
        {filteredResturant.map((restuarant) => (
          <Link key={restuarant.info.id} to={"/restuarant/" + restuarant.info.id}>
            {restuarant.info.veg ? (<RestuarantCardIsVeg resData={restuarant}></RestuarantCardIsVeg>):(<RestuarantCard resData={restuarant} />)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
