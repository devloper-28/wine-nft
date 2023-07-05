import React, { useEffect } from 'react';
import { LEGENDARY_STAR, USER_DUMMY, WINEDUMMY } from '../../assets/images';
import './winedetail.css';

function WineDetail() {
  return (
    <>
      <div className="container p-0">
        <div className="row w-100 ">
          <div className=" wrapper  flex-column col-lg-3">
            <div className="side_bottleimg my-2">
              <img className="" src={WINEDUMMY}></img>
            </div>
            <div className="my-2">
              <img className="" src={WINEDUMMY}></img>
            </div>
            <div className="my-2">
              <img className="" src={WINEDUMMY}></img>
            </div>
          </div>
          <div className="col-lg-6 wrapper w-100">
            <img className="wine_img_select" src={WINEDUMMY}></img>
          </div>
          <div className="col-lg-3 wrapper winedetail_info">
            <div className="">
              <h3>2020 ZENA</h3>
              <p className="my-4 collection_name">Napa Valley</p>
              <div className="mb-3 ">
                <p className="wine_msrp">MSRP</p>
                <p className="wine_price mt-3">$ 4500</p>
              </div>
              <div className="mt-2">
                <p className="wine_msrp ">Tier</p>
                <div className="wrapper mt-3 justify-content-start">
                  <p className="collection_name">Legendry</p>
                  <img className="tier_star mx-2" src={LEGENDARY_STAR} />
                </div>
              </div>
              <p className="mt-4 wine_msrp">Owner</p>
              <div className="wrapper mt-3 justify-content-start">
                <img src={USER_DUMMY} alt="alt" />
                <p
                  className="username mx-3"
                  style={{
                    color: '#929292'
                  }}>
                  0wxfg10516788
                </p>
              </div>
              <div className="wrapper btn_wrapper w-100 mt-5 flex-column">
                <button className="wineinfo_button w-100 ">MAKE OFFER</button>
                <button className="wineinfo_button buybtn text-capital my-3">
                  buy now for $4200
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WineDetail;
