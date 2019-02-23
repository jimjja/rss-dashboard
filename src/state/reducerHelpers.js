import RSSParser from 'rss-parser';

const rssParser = new RSSParser();

export const parseFeed = (feedUrl) => {
  let url = feedUrl;
  // Add proxy when working in development to resolve CORS issues
  if (process.env.NODE_ENV !== 'development') {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    url = `${CORS_PROXY}${feedUrl}`;
  }

  return new Promise((resolve, reject) => rssParser.parseURL(url, (error, feed) => {
    if (error) {
      const message = error.message || 'Unexpected error occurred';
      return reject(message);
    }
    return resolve(feed);
  }));
};

export function generateUniqueId() {
  return new Date().getTime();
}

export const generateFeedTag = (title, urlLink) => ({
  id: generateUniqueId(),
  url: urlLink,
  name: title || urlLink,
});
