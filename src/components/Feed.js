import React, { useState, useEffect } from "react";
import Article from './Article.js'
import dateFormat, { masks } from "dateformat";

const Feed = () => {

  // fetch request to server /feeds:
    // retrieve feed data:
      // for each feed entry:
        // render an Article component

  const [articles, setArticles] = useState([]);

    // Fetch IGN RSS feed
    useEffect(() => {
      fetch('/feed')
        .then(data => data.json())
        .then((json) => {
          const list = [];
          for (let i = 0; i < json.items.length; i++) {
            const currentArticle = json.items[i];
            console.log(currentArticle.title);
            console.log(json.items[i].content, 'items');

            list.push(
              <Article key={ currentArticle.link }
                title={ currentArticle.title }
                description= { currentArticle.content }
                date={ dateFormat(currentArticle.pubDate, "dddd, mmmm dS, h:MMtt") }
                url={ currentArticle.link }>
              </Article>
            );
          }
          console.log(json.items);
          console.log(articles, 'articles');
          setArticles(list);
        })
    },[])

    return (
      <section className='feed'>
        {articles}
      </section>
    )

}

export default Feed