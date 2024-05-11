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
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="res-card-info">
        <div className="heading">
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
        </div>
        <div className="other-info">
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
