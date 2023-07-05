import React from 'react'
import { SEARCH } from "../../assets/images/index";


const SearchBox = () => {
  return (
    <>
    <div className="grandcru-section position-relative">
            <img alt="search" src={SEARCH} className="search-icon-input" />
            <input
              placeholder="Search by address, winebottle, or region"
              className="w-100"
            />
          </div>
    </>
  )
}

export default SearchBox