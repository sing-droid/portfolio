import "./HeroImgStyles";
import React from 'react';
import SonuImg from '../assests/sonu.jpg';

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={SonuImg} alt="sonu" />

        </div>
    </div>
  )
}

export default HeroImg;
