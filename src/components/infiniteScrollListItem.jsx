import React from "react";
import "./infiniteScrollListItem.css";
const InfiniteScrollListItem = (props) => {
  return (
    <li>
      <div className="idContainer">
        <h1>Comment Id </h1>
        <span>123</span>
      </div>
      <div className="emailContainer">
        <h1>Email </h1>
        <span>Aimee.@gmailcom</span>
      </div>
      <div className="commentContainer">
        <h1>Comment</h1>
        <span>asdasdasdasdasdasd</span>
      </div>
    </li>
  );
};

export default InfiniteScrollListItem;
