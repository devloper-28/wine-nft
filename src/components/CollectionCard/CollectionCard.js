import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LEFT_ARROW, RIGHT_ARROW } from "../../assets/images";
import { collectionListSaga } from "../../store/actions";
import CardItem from "./CardItem";
import useDebounce from "../../hooks/useDebounce";
import CardSkeletonLoader from "../CardSkeletonLoader/CardSkeletonLoader";
import "./collectioncard.css";
import NoData from "../NoData/NoData";

const CollectionCard = ({ search, rarity, brands, region, Sort, }) => {
  const countPerPage = 20;
  // const Sortkey = arrow.key;

  const [start, setstart] = useState(0);
  const [end, setend] = useState(countPerPage);
  const { collectionList, isLoading } = useSelector(
    (state) => state.collections
  );
  const dispatch = useDispatch();
  const current = end / countPerPage;
  const total = Math.ceil(collectionList?.data?.length / countPerPage);
  const handlePreviousClick = () => {
    setstart((prev) => prev - countPerPage);
    setend((prev) => prev - countPerPage);
  };
  const handleNextClick = () => {
    setstart((prev) => prev + countPerPage);
    setend((prev) => prev + countPerPage);
  };
  const debouncedSearchTerm = useDebounce(search, 500);
  useEffect(() => {
    if (debouncedSearchTerm || debouncedSearchTerm === "") {
      dispatch(
        collectionListSaga({
          searchTerm: debouncedSearchTerm,
          rarity: rarity,
          region: region,
          brand: brands,
          sortBy: Sort?.sortBy,
          key: Sort?.Key,
        })
      );
      return;
    }
  }, [debouncedSearchTerm, rarity, region, brands, Sort]);
  // useEffect(() => {
  //   // if (debouncedSearchTerm || debouncedSearchTerm === "") {
  //   //   dispatch(collectionListSaga({ searchTerm: debouncedSearchTerm }));
  //   //   return;
  //   // }
  //   dispatch(collectionListSaga({ rarity: rarity, region: region }));
  // }, [search, rarity, region]);
  // console.log("search", search);

  // useEffect(() => {
  //   setDataList(collectionList.data);
  // }, [collectionList]);

  // useEffect(() => {
  //   setSorted(dataList);
  // }, [dataList]);

  // useEffect(() => {
  //   // setSorted([])
  //   if (sort === "ALL") {
  //     setSorted(dataList);
  //   } else {
  //     setSorted(dataList.filter((list) => list.rarity === sort));
  //   }
  // }, [sort]);


  return (
    <div>
      <div className="collection-wrapper">
        {isLoading && <CardSkeletonLoader count={20} />}
        <div className="collection-bottle-card">
          {/* skeleton */}

          {/* {serach(items).map((item) => ( <li> // card goes here </li> ))}‌ */}

          {/* {sorted?.slice(start, end).map((list) => {
            return <CardItem key={list._id} item={list} />;
          })} */}

          {collectionList?.data?.length ? (
            collectionList?.data?.slice(start, end).map((item, id) => {
              return <CardItem item={item} />;
            })
          ) : (
            <NoData />
          )}
        </div>
        <div className="custom-pagination">
          <button
            className="bg-transparent text-white d-flex align-items-center"
            onClick={handlePreviousClick}
            disabled={!collectionList?.data?.length || current === 1}
          >
            <img src={RIGHT_ARROW} alt="left_arrow" className="mr-3" />
            Previous
          </button>

          <p className="text-white mb-0">
            {collectionList?.data?.length ? `${current} of ${total}` : "0 of 0"}
          </p>
          <button
            className="bg-transparent text-white d-flex align-items-center"
            onClick={handleNextClick}
            disabled={!collectionList?.data?.length || current === total}
          >
            Next
            <img src={LEFT_ARROW} alt="right_arrow" className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
