import { getRssFeeds } from "../services/rssFeedStorageSrv";

const feedTags = getRssFeeds();

export default {
  rssFeed: null,
  feedTags: feedTags,
  selectedFeed: feedTags[0],
  errorMessage: "",
  isLoadingFeed: false
};
