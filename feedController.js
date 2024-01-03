const RssParser = require('rss-parser');
const mongoose = require('mongoose');


/*------------------------------DATABASE-------------------------------*/

// mongoose.connect('mongodb://localhost:3000/rss-feeds', {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true
// })

// const ArticleSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   pubDate: Date,
// });

// const Article = mongoose.model('Article', ArticleSchema)



/*------------------------------CONTROLLER--------------------------------*/

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

    // feed.items.forEach( item => {
    //   Article.findOne({ link: item.link }, (err, existingItem) => {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }

    //     if (!existingItem) {
    //       const newArticle = new Article({
    //         title: item.title,
    //         link: item.link,
    //         pubDate: item.pubDate,
    //       })
    //     }
    //     newArticle.save();
    //   })

    // })

    return next();
  });

}



module.exports = feedController;