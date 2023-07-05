import React from 'react';
import { CELLARS_CARD, CELLARS_CARD1, CELLARS_CARD2 } from '../../../assets/images';
import CellarsCard from '../../../components/CellarsCard/CellarsCard';
import './userbids.css';

const UserBidsRecieved = () => {
  return (
    <>
      <div className="bids-recieved">
        <div className="bids_wrapprBox">
          <CellarsCard cardImage={CELLARS_CARD} confirm acpteject/>
        </div>
        <div className="bids_wrapprBox">
          <CellarsCard cardImage={CELLARS_CARD} confirm acpteject/>
        </div>
        <div className="bids_wrapprBox">
          <CellarsCard cardImage={CELLARS_CARD1} confirm acpteject/>
        </div>
        <div className="bids_wrapprBox">
          <CellarsCard cardImage={CELLARS_CARD2} confirm acpteject/>
        </div>
       
      </div>
    </>
  );
};

export default UserBidsRecieved;
