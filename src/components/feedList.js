import React from "react";
import FeedItem from "./FeedItem";
import FeedTitle from "./feedTitle";

const listStyle = {
  border: "1px solid #ebedf0",
  borderRadius: 2,
  width: "100%",
  position: "relative",
  padding: "20px"
};

const noItemsMsgStyle = {};
const FeedList = props => {
  return (
    <div style={listStyle}>
      <FeedTitle {...props} />
      {props.items.length === 0 ? (
        <div style={noItemsMsgStyle}>No Items found</div>
      ) : (
        props.items.map((item, index) => <FeedItem key={index} {...item} />)
      )}
    </div>
  );
};

export default FeedList;
