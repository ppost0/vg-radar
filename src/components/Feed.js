import React, { useState, useEffect } from "react";
import Article from './Article.js'

const Feed = () => {

  // fetch request to server /feeds:
    // retrieve feed data:
      // for each feed entry:
        // render an Article component

  const [articles, setArticles] = useState([]);


    useEffect(() => {
      fetch('/feed')
        .then(data => data.json())
        .then((json) => {
          const list = [];
          for (let i = 0; i < json.items.length; i++) {
            console.log(json.items[i].title);
            list.push(<Article key={ json.items[i].link } title={ json.items[i].title } date={ json.items[i].pubDate } url={ json.items[i].link }> </Article>);
          }
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