import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  //local state variable
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [searchText,setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const apiData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestuarants(apiData);
  };

  //Conditional Rendering
  return listOfRestuarants.length===0?<Shimmer /> : ( 
    <div className="body">
      <div className="filter">
      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
        }}/>
        <button onClick={()=>{
          const filteredList = listOfRestuarants.filter(
            (res) => ((res.info.name).toLowerCase().includes(searchText.toLowerCase()))
          );
          setListOfRestuarants(filteredList);
        }}>Search</button>
      </div>
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
