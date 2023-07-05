import React from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import {  useSelector } from "react-redux";
import { SEARCH } from "../../assets/images";

import CollectionCard from "../../components/CollectionCard/CollectionCard";
import Header from "../../components/Header/Header";
import PageTitleSection from "../../components/PageTitleSection/PageTitleSection";
import "../Dashboard/dashboard.css";
import "./collection.css";

const Collection = () => {
  const tickmark = <i class="fa-solid fa-check"></i>;
  const [rarity, setrarity] = useState("");
  const [Brand, setBrand] = useState("");
  const [regionValue, setregionValue] = useState("");
  const [search, setsearch] = useState("");
  const [Tick, setTick] = useState("");
  const { region, brand } = useSelector((state) => state.collections);
  const [arrow, setarrow] = useState({
    sortBy: "",
    Key: 1,
  });
  const handleRarity = (e) => {
    setrarity(e);
  };
  const handleSortBy = (e) => {
    if (e === Tick) {
      setarrow(null);
      setTick("");
      return;
    }
    if (e === "yearHL") {
      setarrow({ sortBy: "year", Key: -1 });
    } else if (e === "yearLH") {
      setarrow({ sortBy: "year", Key: 1 });
    } else if (e === "ratingHL") {
      setarrow({ sortBy: "rating", Key: -1 });
    } else if (e === "ratingLH") {
      setarrow({ sortBy: "rating", Key: 1 });
    } else if (e === "priceHL") {
      setarrow({ sortBy: "msrp", Key: -1 });
    } else if (e === "priceLH") {
      setarrow({ sortBy: "msrp", Key: 1 });
    }
    setTick(e);
  };

  const handleBrand = (e) => {
    setBrand(e);
  };
  const handleRegion = (e) => {
    setregionValue(e);
  };
  const searchHandle = (e) => {
    setsearch(e.target.value);
  };

  return (
    <div className="Dashboard_Body">
      <Header />
      <div className="container">
        <div className="collection-wrapper">
          <PageTitleSection showYear="2022" showTitle="Grand Cru Mint Pass" />
          <p className="grandcru-content mb-40">
            The Grand Cru 2022 Collection will feature wines from Napa,
            Bordeaux, and Burgundy ranginig from the years 1955-1999
          </p>
          <div className="grandcru-section position-relative">
            <img alt="search" src={SEARCH} className="search-icon-input" />
            <input
              value={search}
              onChange={searchHandle}
              placeholder="Search by address, winebottle, or region"
              className="w-100"
            />
          </div>
          <div className="dropdown-container" id="collection_dropdowns">
            <div className="left-dropdown">
              <Dropdown onSelect={handleSortBy}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Sort By
                </Dropdown.Toggle>

                <Dropdown.Menu id="sort-by-drop">
                  <Dropdown.Item
                    eventKey="priceHL"
                    className="d-flex align-items-center justify-content-between"
                  >
                    Price : High to low{" "}
                    <div>{Tick === "priceHL" ? tickmark : null}</div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="priceLH"
                    className="d-flex align-items-center justify-content-between"
                  >
                    Price : Low to High{" "}
                    <div>{Tick === "priceLH" ? tickmark : null}</div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="yearHL"
                    className="d-flex align-items-center justify-content-between"
                  >
                    Year : New to Old{" "}
                    <div>{Tick === "yearHL" ? tickmark : null}</div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="yearLH"
                    className="d-flex align-items-center justify-content-between"
                  >
                    Year : Old to New{" "}
                    <div>{Tick === "yearLH" ? tickmark : null}</div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="ratingHL"
                    className="d-flex align-items-center justify-content-between"
                  >
                    Rating : High to low{" "}
                    <div>{Tick === "ratingHL" ? tickmark : null}</div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="ratingLH"
                    className="d-flex align-items-center justify-content-between"
                  >
                    Rating : Low to High{" "}
                    <div>{Tick === "ratingLH" ? tickmark : null}</div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="right-dropdown">
              <Dropdown onSelect={handleRegion}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <p>{regionValue ? regionValue : "Region"}</p>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="">ALL</Dropdown.Item>
                  {region?.map((item) => {
                    return (
                      <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown onSelect={handleRarity}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <p>{rarity ? rarity : "Rarity"}</p>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="">All</Dropdown.Item>
                  <Dropdown.Item eventKey="Epic">Epic</Dropdown.Item>
                  <Dropdown.Item eventKey="Gold">Gold</Dropdown.Item>
                  <Dropdown.Item eventKey="Platinum">Platinum</Dropdown.Item>
                  <Dropdown.Item eventKey="Legendary">Legendary</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown onSelect={handleBrand}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <p>{Brand ? Brand : "Brand"}</p>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="">ALL</Dropdown.Item>
                  {brand?.map((item) => {
                    return (
                      <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="cards-container">
            <CollectionCard
              search={search}
              rarity={rarity}
              region={regionValue}
              brands={Brand}
              Sort={arrow}
              // arrow=row}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
