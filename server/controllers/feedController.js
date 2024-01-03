const RssParser = require('rss-parser');

// feedController object to export
const feedController = {};

// Create new RssParser instance
const parser = new RssParser();

// Loads articles to feed
feedController.loadFeed = (req, res, next) => {
  console.log('loading feed...');

  parser.parseURL('https://feeds.feedburner.com/ign/games-all')
  .then(feed => {
    // Use the parsed feed data
    console.log(feed.title, '<--- [feed title]');
    console.log(feed.items[0].title);

    res.locals.feed = feed;

    return next();
  });

}



module.exports = feedController;