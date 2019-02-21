import PropTypes from "prop-types";

export default {
  url: PropTypes.string,
  isSelected: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.number,
  onFeedDelete: PropTypes.func,
  onFeedClick: PropTypes.func,
  onFeedUpdate: PropTypes.func
};
