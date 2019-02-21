import PropTypes from "prop-types";

export default {
  link: PropTypes.string,
  content: PropTypes.string,
  title: PropTypes.string.isRequired,
  pubDate: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string
  })
};
