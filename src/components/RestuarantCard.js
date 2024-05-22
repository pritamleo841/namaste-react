import { CDN_URL } from "../utils/constants";

const RestuarantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    areaName,
    locality,
    avgRating,
    costForTwo,
    totalRatingsString,
    sla,
    cuisines,
  } = resData.info;
  const { slaString } = sla;

  return (
    <div className="m-2 p-2 w-[240px] rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col items-center">
      <img
        className="rounded-lg w-[200px] h-[200px]"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="res-card-info">
        <div className="heading">
          <h3 className="font-bold py-2 text-lg">{name}</h3>
        </div>
        <div className="other-info">
          <h4>{cuisines.join(", ")}</h4>
          <h4>{locality}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{totalRatingsString}</h4>
          <h4>{slaString}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestuarantCard;
