import React from "react";
import "./infiniteScrollList.css";
import InfiniteScrollListItem from "./infiniteScrollListItem";
const InfiniteScrollList = (props) => {
  return (
    <>
      <ul>
        <InfiniteScrollListItem />
      </ul>
      <ul>
        <InfiniteScrollListItem />
      </ul>
    </>
  );
};

export default InfiniteScrollList;
