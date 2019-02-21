import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "./icon";
import FeedTagType from "../types/feedTag";

const nameStyle = {
  marginRight: ".3em"
};
const deleteBtnStyle = {};

const FeedTag = props => {
  const {
    url,
    isSelected,
    name,
    id,
    onFeedDelete,
    onFeedClick,
    onFeedUpdate
  } = props;

  const [isEditMode, setEditMode] = useState(false);
  const [tagName, setTagName] = useState(name);

  const wrapperStyle = {
    border: "1px solid #6e2a9e",
    display: "inline-block",
    padding: "5px",
    borderRadius: "30px",
    background: `${isSelected ? "#9352ea" : "#6e2a9e"}`,
    color: "white",
    fontSize: "14px",
    cursor: "pointer"
  };

  function toggleEditMode() {
    setEditMode(!isEditMode);
  }

  function handleNameChange(evt) {
    const {
      target: { value }
    } = evt;
    setTagName(value);
  }

  function handleConfirmNameChange() {
    if (tagName && tagName.length > 0 && tagName !== name) {
      onFeedUpdate(id, tagName);
    }
    toggleEditMode();
  }

  return (
    <div style={wrapperStyle} alt={url} id={id}>
      {isEditMode && (
        <React.Fragment>
          <input
            type="text"
            value={tagName}
            onChange={handleNameChange}
            style={nameStyle}
          />
          <Icon name="check-circle" onClick={handleConfirmNameChange} />
        </React.Fragment>
      )}
      {!isEditMode && (
        <div onDoubleClick={toggleEditMode}>
          <span
            role="button"
            onClick={() => {
              onFeedClick(id);
            }}
            style={nameStyle}
          >
            {name}
          </span>
          <span
            role="button"
            onClick={() => {
              onFeedDelete(id);
            }}
            style={deleteBtnStyle}
          >
            <Icon name="times-circle" />
          </span>
        </div>
      )}
    </div>
  );
};

FeedTag.propTypes = FeedTagType;

FeedTag.defaultProps = {
  url: null,
  isSelected: false,
  name: null,
  id: null,
  onFeedDelete: null,
  onFeedClick: null,
  onFeedUpdate: null
};
export default FeedTag;
