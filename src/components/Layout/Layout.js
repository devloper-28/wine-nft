import React from 'react';
import Header from '../Header/Header';
import '../../views/Dashboard/dashboard.css';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="Dashboard_Body">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
