import { useEffect,useState } from "react";
import { GET_EACH_RESTUARANT_URL } from "../utils/constants";

const useRestuarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(GET_EACH_RESTUARANT_URL + resId);
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };
  return resInfo;
};

export default useRestuarantMenu;
