import React from "react";
import renderer from "react-test-renderer";
import FeedTag from "./feedTag";

describe("Feed Tag component", () => {
  it("should match snapshot", () => {
    const props = {
      url: "sample url",
      isSelected: false,
      name: "Feed Tag",
      id: 1,
      onFeedDelete: () => {},
      onFeedClick: () => {},
      onFeedUpdate: () => {}
    };
    const tree = renderer.create(<FeedTag {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
