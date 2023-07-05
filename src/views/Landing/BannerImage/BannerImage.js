import React from "react";
import { BANNER_PHOTO } from "../../../assets/images";
import "./bannerPhoto.css"

const BannerImage = () => {
  return (
    <>
      <img src={BANNER_PHOTO} alt="BannerPhoto" className="banner-photo"/>
    </>
  );
};

export default BannerImage;
