import React from "react";
import { LABEL_1 } from "../../assets/images";
import "./topcollercard.css";

const TopCard = ({profile}) => {
  return (
    <>
      <div className="top-cards-wrapper-container">
        <div className="top-centered-cards-wrapper">
          <div className="top-cards-image">
            <img src={profile} alt="topcard-1" />
            <div className="lable-wrapper">
              <div className="lable-box">
                <img src={LABEL_1} alt="labletop" />
                <p className="lable">1st</p>
              </div>
            </div>
          </div>
        </div>
        <div className="top-cards-details">
          <div className="top-cards-details-box">
            <div className="cards-wrap">
              <p className="cards-price">$40,154</p>
              <p className="liner-between">|</p>
              <p className="cards-bottle-value">2 Bottles</p>
            </div>
            <div className="cards-id">0x0135499230513567</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCard;
