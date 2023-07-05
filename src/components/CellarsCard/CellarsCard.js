import React, { useState } from 'react';
import { BIDDER_IMG, CELLARS_RP, CELLARS_STAR } from '../../assets/images/index';
import './cellarscard.css';
//
const CellarsCard = ({ cardImage, confirm, acpteject, statusTrue, status }) => {
  const [isBidding] = useState(confirm);
  const [acceptReject] = useState(acpteject);
  const [isStatus] = useState(statusTrue);
  return (
    <>
      <div className="bottle-wrapper">
        <div className="cellars-card">
          <img src={cardImage} alt="card" className="cellars_card_img " />
          <div className="d-flex justify-content-between  rarity_area">
            <div className="rarity-box">
              <div className="mr-2 platinum-title">Platinum</div>
              <img src={CELLARS_STAR} alt="grey_star" className="grey_star" />
            </div>
            <div className="rarity-box justify-content-end">
              <img src={CELLARS_RP} alt="yellow_star" className="yellow_star" />
              <div className="ml-2 rp-value">99 RP</div>
            </div>
          </div>
        </div>
        <div>
          <p className="wine-description">Del Maguey “San Jose Rio Minas” Mezcal 750ml</p>
          <div className="wine-brand-value">
            <div className="flex-50">
              <div className="value-title">MSRP</div>
              <div className="value">$1212</div>
            </div>
            <div className="flex-50">
              <div className="value-title">OWNER</div>
              <div className="owner-name">Joannejujubeat</div>
            </div>
          </div>
        </div>
        {isBidding ? (
          <div className="bids-recived-wrapper">
            <div className="bids-box-acpt-rejct">
              <div className="bids-of-user">
                <div className="d-flex align-items-center">
                  <div>
                    {' '}
                    <img src={BIDDER_IMG} alt="bidder img" className="bidderImg" />
                  </div>
                  <div className="bidder-name">
                    <p className="mb-0">Patrciksoginer</p>
                    <p className="mb-0">0wdg305134917</p>
                  </div>
                </div>
                <div>
                  <p className="bid-ammnt">$4,200</p>
                </div>
              </div>
              {acceptReject ? (
                <div className="accept_rejectSection">
                  <button className="btn btn-lightgreen">Accept</button>
                  <button className="btn btn-transparent">Reject</button>
                </div>
              ) : null}
              {isStatus ? (
                <p
                  className={`bidStatus ${
                    status === 'PENDING...'
                      ? 'bidPending'
                      : status === 'ACCEPTED'
                      ? 'bidAccepted'
                      : 'bidRejected'
                  }`}>
                  {status}
                </p>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CellarsCard;
