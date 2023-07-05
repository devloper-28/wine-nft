import React from "react";
import TopCard from "../../components/TopCellersCard/TopCard";
import TopOtherCards from "../../components/TopCellersCard/TopOtherCards";
import { TOP_CARD_1, TOP_CARD_2, TOP_CARD_3 } from "../../assets/images";
import CellarsTable from "../../components/CellarsTable/CellarsTable";
import "./topcellers.css";

const TopCellersList = ({isNext}) => {
  return (
    <>
      <div className="top-cards-container">
        <div className="top-cards-wrapper">
          <TopCard profile={TOP_CARD_1} />
        </div>
        <div className="other-top-cards">
          <TopOtherCards profile={TOP_CARD_2} labelText="2nd" />
          <TopOtherCards profile={TOP_CARD_3} labelText="3rd" />
        </div>
      </div>
      <div className="other-table-cards">
        <CellarsTable isNext={isNext}/> 
      </div>
    </>
  );
};

export default TopCellersList;
