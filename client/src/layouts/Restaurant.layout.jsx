import React from 'react'
//import { TiStarOutline } from "react-icons/ti";
//import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
//import { BiBookmarkPlus } from "react-icons/bi";

//components
import Navbar from "../components/Navbar"
//import imageGrid from "../components/Restaurants/ImageGrid";
//import InfoButton from "../components/Restaurants/InfoButton";
//import RestaurantInfo from '../pages/RestaurantInfo';
//import Tabs from "../components/Cart/CartContainer";
//import { CardContentInner } from 'react-admin';

const RestaurantLayout = ( Component ) => ( { ...props } ) =>
{
  return (
    <>
      <Navbar />
      <Component { ...props } />

    </>
  );
};

export default RestaurantLayout;


{/*

<div className='container mx-auto px-4 mt-8 lg:px-20 pb-20'>
         <imageGrid images={ } /> 
        <RestaurantInfo name="" restaurantRating="" deliveryRating="" cuisine="" address="" />
        <div className='my-4 flex flex-wrap gap-3 mx-auto' >

          <InfoButton isActive="true">
            <TiStarOutline/>Add Review
          </InfoButton>

          <InfoButton >
            <RiDirectionLine/>Direction
          </InfoButton>

          <InfoButton >
            <BiBookmarkPlus/>Bookmark
          </InfoButton>

          <InfoButton >
            <RiShareForwardLine/>Share
          </InfoButton>          

        </div>
        <div className='my-10'>
          <Tabs/>
        </div>

        <Component { ...props } />
      </div>
      <CardContentInner/>
    </>
  )

*/ }