import React from "react";
import { BANNER_ICON } from "../../../assets/images";
import "./bannercontent.css";

const BannerContent = () => {
  return (
    <>
      <div className="bannerContent">
        <div className="d-flex justify-content-center">
          <img alt="logo" src={BANNER_ICON} className="logo" />
        </div>
        <div className="banner_desc">
          <p>Soigner is a members only</p>
          <p className="primary-text"> fine wine club </p>
          <p>on the block chain.</p>
        </div>
        <div>
          <p className="banner_content">Get private access to the most exclusive allocations from trusted sources around the world. Each bottle is carefully vetted for provenance and authenticity</p>
        </div>
      </div>
    </>
  );
};

export default BannerContent;
