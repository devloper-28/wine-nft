import React from "react";
import {
  CELLARS_CARD,
  CELLARS_CARD1,
  CELLARS_CARD2,
  CELLARS_CARD3,
} from "../../../assets/images";
import CellarsCard from "../../../components/CellarsCard/CellarsCard";
import "./BigCollect.css"

const SoignerBigCollection = () => {
  return (
    <div className="" id="slick">
      <div className="cell_wrp" id="abcd">
        <div className="cell_wrapper_s">
        <CellarsCard cardImage={CELLARS_CARD} />
        </div>
        <div className="cell_wrapper_s">
        <CellarsCard cardImage={CELLARS_CARD1} />
        </div>
        <div className="cell_wrapper_s">
        <CellarsCard cardImage={CELLARS_CARD2} />
        </div>
        <div className="cell_wrapper_s">
        <CellarsCard cardImage={CELLARS_CARD3} />
        </div>
        <div className="cell_wrapper_s">
        <CellarsCard cardImage={CELLARS_CARD1} />
        </div>
        <div className="cell_wrapper_s">
        <CellarsCard cardImage={CELLARS_CARD} />
        </div>
        <div className="cell_wrapper_s">
        <CellarsCard cardImage={CELLARS_CARD2} />
        </div>
        <div className="cell_wrapper_s">
        <CellarsCard cardImage={CELLARS_CARD} />
        </div>
      </div>
    </div>
  );
};

export default SoignerBigCollection;
