import React from 'react';
import PageTitleSection from '../../components/PageTitleSection/PageTitleSection';
import TopCellersList from '../TopCellersList/TopCellersList';
import '../Dashboard/dashboard.css';

const CellarsList = () => {
  return (
    <>
      <div className="container">
        <PageTitleSection showTitle="cellars list" />
        <div className="mt-5">
          <TopCellersList isNext/>
        </div>
      </div>
    </>
  );
};

export default CellarsList;
