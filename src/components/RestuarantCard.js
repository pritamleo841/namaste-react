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
    <div className="relative m-3 w-[260px] rounded-2xl bg-white shadow hover:shadow-lg transition overflow-hidden">
      {/* Image */}
      <img
        className="w-full h-[160px] object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <p className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</p>
        <p className="text-sm text-gray-500">{locality || areaName}</p>

        {/* Stats Row */}
        <div className="flex justify-between items-center text-sm font-medium mt-2">
          <span className="text-green-600">⭐ {avgRating}</span>
          <span>{costForTwo}</span>
          <span>{slaString}</span>
        </div>

        {/* Total Ratings */}
        <p className="text-xs text-gray-400 mt-1">{totalRatingsString}</p>
      </div>
    </div>
  );
};

// Higher Order Component for Veg Label
export const withVegLabel = (RestuarantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 bg-white/90 border border-green-600 text-green-600 text-xs font-semibold rounded px-2 py-1 shadow-sm">
          Pure Veg 🌿
        </span>
        <RestuarantCard {...props} />
      </div>
    );
  };
};

export default RestuarantCard;