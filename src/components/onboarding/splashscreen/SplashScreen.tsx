import React from 'react'
import Card from '../../card/Card'
import './splashscreen.scss'
import { carouselitems } from '../../../utils/constants/index'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {useDispatch } from 'react-redux'
import { setcardIndex } from '../../../reducer/cardReducer'

const SplashScreen = () => {
  const navigate = useNavigate()
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  const dispatch = useDispatch()

  const handleSelectCard=(index:number)=>{
    dispatch(setcardIndex(index))
    navigate('/dashboard')
  }
  return (
    <div className="splashScreen">
      <Slider {...settings} className="splash_item">
        {carouselitems.map(({ imgUri, title, text }, i) => (
          <Card
            imgUri={imgUri}
            text={text}
            title={title}
            key={i}
            page={i + 1}
            onClick={() => handleSelectCard(i)}
            showBtn={true}
          />
        ))}
      </Slider>
    </div>
  )
}

export default SplashScreen
