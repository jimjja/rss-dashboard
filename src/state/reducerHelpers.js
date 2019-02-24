import RSSParser from 'rss-parser';

let rssParser = null;

/**
 * Get RSS Parser
 * Caches the parser if it is not created already instead of creating new instance every time
 */
function getRssParser() {
  if (!rssParser) {
    rssParser = new RSSParser();
  }
  return rssParser;
}

/**
 * Parse RSS feed from XML to JSON
 * @param {string} feedUrl - RSS feed url
 */
export const parseFeed = (feedUrl) => {
  let url = feedUrl;
  // Add proxy when working in development to resolve CORS issues
  if (process.env.NODE_ENV !== 'development') {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    url = `${CORS_PROXY}${feedUrl}`;
  }

  const parser = getRssParser();
  return new Promise((resolve, reject) => parser.parseURL(url, (error, feed) => {
    if (error) {
      const message = error.message || 'Unexpected error occurred';
      return reject(message);
    }
    return resolve(feed);
  }));
};

/**
 * Geberate unique value based on current date and time
 */
export function generateUniqueId() {
  return new Date().getTime();
}

/**
 * Generate RSS Feed tag
 * @param {string} title - RSS Feed title
 * @param {string} urlLink - RSS Feed url
 */
export const generateFeedTag = (title, urlLink) => ({
  id: generateUniqueId(),
  url: urlLink,
  name: title || urlLink,
});
