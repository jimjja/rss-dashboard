import { getItem, setItem } from "./localStorageSrv";

const RSS_FEED_KEY = "rssFeeds";

export const getRssFeeds = () => getItem(RSS_FEED_KEY) || [];

export const saveRssFeed = ({ id, name, url }) => {
  const currFeeds = getItem(RSS_FEED_KEY) || [];
  currFeeds.push({ id, name, url });
  setItem({ key: RSS_FEED_KEY, value: currFeeds });
  return currFeeds;
};

export const deleteRssFeed = feedId => {
  const currFeeds = getItem(RSS_FEED_KEY) || [];
  if (currFeeds.length > 0) {
    const updatedFeeds = currFeeds.filter(f => f.id !== feedId);
    setItem({ key: RSS_FEED_KEY, value: updatedFeeds });
    return updatedFeeds;
  }
  return currFeeds;
};

export const updateRssFeed = ({ tagId, newName }) => {
  const currFeeds = getItem(RSS_FEED_KEY) || [];
  const feedIndex = currFeeds.findIndex(f => f.id === tagId);

  if (feedIndex > -1) {
    const feeds = [...currFeeds];
    const newFeedDetails = {
      ...feeds[feedIndex],
      name: newName
    };
    feeds.splice(feedIndex, 1, newFeedDetails);
    setItem({ key: RSS_FEED_KEY, value: feeds });
    return feeds;
  }
  return currFeeds;
};
