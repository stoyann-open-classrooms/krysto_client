import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardSlide from '../cardSlide/CardSlide';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOffers, reset } from '../../../features/offer/offerSlice';
import Spinner from '../../shared/spinner/Spinner';
function HomeSlider() {

    const { offers, isLoading, isError, isSuccess } = useSelector(
        (state) => state.offer,
      )
      const dispatch = useDispatch()
    
      useEffect(() => {
        return () => {
          if (isSuccess) {
            dispatch(reset())
          }
        }
      }, [dispatch, isSuccess, isError])
    
      useEffect(() => {
        dispatch(getOffers())
      }, [])
      console.log(offers)






    const settings = {
        className:"center",
        autoplay: true,
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 880,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  if (!offers || offers.length === 0) {
    return <Spinner/>
  }


  return (
    <Slider {...settings}>
   {offers.offers
        ? offers.offers.map((offer) => (
            <CardSlide key={offer._id} offer={offer} />
          ))
        : ''}
  </Slider>
  
  )
}

export default HomeSlider