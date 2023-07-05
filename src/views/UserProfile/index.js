import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { PROFILE_ICON1, USER_DUMMY } from '../../assets/images';
import './profile.css';
import History from './UserTabs/History';
import UserBids from './UserTabs/UserBids';
import UserBidsRecieved from './UserTabs/UserBidsRecieved';
import UserListings from './UserTabs/UserListings';

const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState('made');
  const navigate = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (navigate.search) {
      setSelectedTab(navigate.search.split('=')[1]);
    }
  }, [navigate]);
  const pushState = (tab) => {
    history.push(`/user-profile?tab=${tab}`);
  };
  const userTabsrenderer = () => {
    switch (selectedTab) {
      case 'made':
        return <UserBids />;
      case 'recieved':
        return <UserBidsRecieved />;
      case 'history':
        return <History />;
      case 'listing':
        return <UserListings />;
      default:
        return <UserBids />;
    }
  };
  useEffect(() => {
    userTabsrenderer();
  }, [selectedTab]);

  return (
    <>
    <div className='container'>
      <div className="w-100 wrapper flex-column">
        <img className="User_profilepic my-4" src={PROFILE_ICON1} alt="dummy" />
        <div className="wrapper">
          <p className="text-capital User_name mx-3">jujubeat_</p>
          <p className="userwallet">0x0135499230513567</p>
        </div>
      </div>
      <div className=" wrapper ">
        <div className="wrapper flex-column px-5 py-5 ">
          <p className="subinfo_para text-capital mb-3">Cellar Value</p>
          <p className="subinfo_para_val">$14,501 (8.8 ETH)</p>
        </div>
        <div className="subinfodivider"></div>
        <div className="wrapper flex-column px-5 py-5">
          <p className="subinfo_para text-capital mb-3">Collection Size</p>
          <p className="subinfo_para_val color-white">2 Bottles</p>
        </div>
        <div className="subinfodivider"></div>
        <div className="wrapper flex-column px-5 py-5">
          <p className="subinfo_para text-capital mb-3">Cellar Ranking</p>
          <p className="subinfo_para_val color-white">5th</p>
        </div>
      </div>
      <ul className="profiletab wrapper ">
        <li
          onClick={() => pushState('recieved')}
          className={`${selectedTab === 'recieved' && 'selectedlist'}`}>
          BIDS RECIEVED
          {selectedTab === 'recieved' && <div className="selectedtab_divider"></div>}
        </li>
        <li
          onClick={() => pushState('made')}
          className={`${selectedTab === 'made' && 'selectedlist'}`}>
          BIDS MADE
          {selectedTab === 'made' && <div className="selectedtab_divider"></div>}
        </li>
        <li
          onClick={() => pushState('history')}
          className={`${selectedTab === 'history' && 'selectedlist'}`}>
          HISTORY
          {selectedTab === 'history' && <div className="selectedtab_divider"></div>}
        </li>
        <li
          onClick={() => pushState('listing')}
          className={`${selectedTab === 'listing' && 'selectedlist'}`}>
          LISTING
          {selectedTab === 'listing' && <div className="selectedtab_divider"></div>}
        </li>
      </ul>
      <div className="profiledivider"></div>
      <div>{userTabsrenderer()}</div>
      </div>
    </>
  );
};

export default UserProfile;
