import React from "react";
import Slider from "react-slick";
import CellarsCard from "../../../components/CellarsCard/CellarsCard";
import {
  CELLARS_CARD,
  CELLARS_CARD1,
  CELLARS_CARD2,
  CELLARS_CARD3,
} from "../../../assets/images";
// React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./soigner.css";

const SoignerCollection = ({ items }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: items,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <>
      <div className="container" id="slick">
        <Slider {...settings}>
          <div>
            <CellarsCard cardImage={CELLARS_CARD} />
          </div>
          <div>
            <CellarsCard cardImage={CELLARS_CARD1} />
          </div>
          <div>
            <CellarsCard cardImage={CELLARS_CARD2} />
          </div>
          <div>
            <CellarsCard cardImage={CELLARS_CARD3} />
          </div>
          <div>
            <CellarsCard cardImage={CELLARS_CARD} />
          </div>
          <div>
            <CellarsCard cardImage={CELLARS_CARD2} />
          </div>
          <div>
            <CellarsCard cardImage={CELLARS_CARD3} />
          </div>
          <div>
            <CellarsCard cardImage={CELLARS_CARD1} />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SoignerCollection;
