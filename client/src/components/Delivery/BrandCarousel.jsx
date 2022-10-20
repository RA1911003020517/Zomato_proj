import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import DeliveryCategoryCard from './DeliveryCategoryCard';

const BrandCarousel = () =>
{
    
    const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875219.png",
      title: "KFC",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/08da44392a73e7e9db7be1e47863f07d_1605502636.png",
      title: "SubWay",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/0b29d747e59e3733bd194c73529d36d7_1629461595.png",
      title: "Pizza Hut",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643984189.png",
      title: "McDonald's",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/9014a1b8796dd3fa1a0a629f6024644e_1629450209.png",
      title: "WOW! Momo",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/0a0d27465baf95aa3bb54875a2bb359d_1566562162.png",
      title: "Hot Chips",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/d5fc2e2a1c3add1c898b3f5c27e67631_1635754295.png",
      title: "Hotel Saravana Bhavan",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/868e99c35e35fc2bae1dccc465ed4c82_1625159864.png",
      title: "SS Hyderabad Biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505652.png",
      title: "A2B - Adyar Ananda Bhavan",
    },
  ];

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    modules: [Navigation],
    className: "mySwiper",
    navigation: true,
  };

    return (
    <>
      <h1 className ="text-xl mt-4 md:mt-8 md:text-3xl md:font-semibold mb-5">
        Top brands for you
      </h1>
      <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center">
        { categories.map( ( food, index ) =>
        (
          <DeliveryCategoryCard key={ index } { ...food }
          />
        ))}
      </div>
      <div className="hidden lg:block">
        <Swiper {...slideConfig}>
          {categories.map((food, index) => (
            <SwiperSlide key={index}>
              <DeliveryCategoryCard {...food} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default BrandCarousel;