import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "./CardSkeleton";
import "./cardSkeletonLoader.css";

const CardSkeletonLoader = ({ count = 0 }) => {
  return (
    <div className="Skeleton-margin-top">
    <div className="skeleton-wrapper">
      <CardSkeleton count={count} />
    </div>
    </div>
  );
};

export default CardSkeletonLoader;
