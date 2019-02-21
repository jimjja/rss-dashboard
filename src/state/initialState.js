import { getRssFeeds } from "../services/rssFeedStorageSrv";

const feedTags = getRssFeeds();

export default {
  rssFeed: null,
  feedTags,
  selectedFeed: feedTags[0],
  errorMessage: "",
  isLoadingFeed: false
};
