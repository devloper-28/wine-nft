import React from 'react';
import { CELLARS_CARD, CELLARS_CARD1, CELLARS_CARD2 } from '../../../assets/images';
import CellarsCard from '../../../components/CellarsCard/CellarsCard';

const UserBids = () => {
  return (
    <>
      <div className="bids-recieved">
        <div className="bids_wrapprBox">
          <CellarsCard cardImage={CELLARS_CARD1} status="PENDING..." confirm statusTrue />
        </div>
        <div className="bids_wrapprBox">
          <CellarsCard cardImage={CELLARS_CARD} status="ACCEPTED" confirm statusTrue />
        </div>
        <div className="bids_wrapprBox">
          <CellarsCard cardImage={CELLARS_CARD2} status="REJECTED" confirm statusTrue />
        </div>
      </div>
    </>
  );
};

export default UserBids;
