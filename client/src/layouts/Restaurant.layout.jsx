import React from "react";
//import { TiStarOutline } from "react-icons/ti";
//import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
//import { BiBookmarkPlus } from "react-icons/bi";

// components
import Navbar from "../components/Navbar";
// import ImageGrid from "../components/Restaurant/ImageGrid";
// import InfoButton from "../components/Restaurant/InfoButton";
// import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
// import Tabs from "../components/Restaurant/Tabs";
// import CartContainer from "../components/Cart/CartContainer";

const RestaurantLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar />
        <Component {...props} />
      </>
    );
  };
export default RestaurantLayout;

