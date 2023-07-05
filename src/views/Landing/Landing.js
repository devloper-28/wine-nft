import React from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import BannerImage from './BannerImage/BannerImage';
import SoignerCollection from './SoignerCollection/SoignerCollection';
import ListLine from '../../components/ListLine/ListLine';
import TopCellersList from '../TopCellersList/TopCellersList';

import '../Dashboard/dashboard.css';
import SoignerBigCollection from './SoignerCollection/SoignerBigCollection';

const Landing = () => {
  return (
    <>
      <div className="container">
        <SearchBox />
      </div>
      <BannerImage />
      <div className="container">
        <SoignerCollection items={1} />
        <ListLine titleList="cellars list" fullList="view full cellars list" to="/cellarslist" />
        <TopCellersList />
        <ListLine titleList="Most Popular" fullList="view full marketlist" />
        {/* <SoignerCollection/> */}
        <SoignerBigCollection />
      </div>
    </>
  );
};

export default Landing;
