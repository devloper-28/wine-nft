import React from "react";
import { WINE1, GREY_STAR, YELLOW_STAR } from "../../assets/images";

const CardItem = ({ item }) => {
  return (
    <div className="bottle-wrapper">
      <div className="bottle-box">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="mr-2 platinum-title">{item.rarity}</div>
            <img src={GREY_STAR} alt="grey_star" className="grey_star" />
          </div>
          <div className="d-flex">
            <img src={YELLOW_STAR} alt="yellow_star" />
            <div className="ml-2 rp-value">{item.rating} RP</div>
          </div>
        </div>
        <div>
          <img alt="wine" src={WINE1} className="centered-wine" />
        </div>
      </div>
      <div>
        <p className="wine-description">{item.wineName}</p>
        <div className="wine-brand-value">
          <div className="flex-50">
            <div className="value-title">MSRP</div>
            <div className="value">${item.msrp}</div>
          </div>
          {/* <div className="flex-50">
          <div className="value-title">OWNER</div>
          <div className="owner-name">{item.owner}</div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
