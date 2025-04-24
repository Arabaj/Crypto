import React from 'react'
import Slider from './Slider';
import bannerimg from '../Banner/banner2.jpg'
const Banner = () => {
  return (
    <div className='container-fluid text-center ' style={{ backgroundImage: `url(${bannerimg})` }}>
      <h1 className='text-uppercase pt-5' style={{ color: "gold" }}>Crypto Graphy</h1>

      <p className='pt-3 pb-5'>Get All The Info Regarding Your Favorite Crypto Currency</p>
      <Slider />
    </div>
  )
}

export default Banner;
