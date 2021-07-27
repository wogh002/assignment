import React from "react";
import "./infiniteScrollListItem.css";
const InfiniteScrollListItem = ({ user }) => {
  return (
    <li>
      <div className="idContainer">
        <h1>Comment Id </h1>
        <span>{user.id}</span>
      </div>
      <div className="emailContainer">
        <h1>Email </h1>
        <span>{user.email}</span>
      </div>
      <div className="commentContainer">
        <h1>Comment</h1>
        <span>{user.body}</span>
      </div>
    </li>
  );
};

export default InfiniteScrollListItem;
