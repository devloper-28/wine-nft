import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./cardSkeletonLoader.css";

const CardSkeleton = ({ count = 0 }) => {
  return (
    <>
      {[...new Array(count)].map(() => (
        <div className="skeleton-space">
          <div className="skeleton-body">
            <div className="skeleton-container">
              <SkeletonTheme>
                <div className="Epic-Rp-Loader">
                  <Skeleton height={23} />
                  <Skeleton height={23} />
                </div>
                <Skeleton height={250} />
                <Skeleton height={22} className="my-13" />
                <Skeleton height={22} />
                <Skeleton height={22} className="mt-1" />
              </SkeletonTheme>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardSkeleton;
