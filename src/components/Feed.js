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
          for (let i = 0; i < json.items.length; i++) {
            console.log(json.items[i].title);
            articles.push(
              <Article key={json.items[i].link}>  </Article>
            );
          }
        })
    },[])

    return (
      <section className='feed'>
        {articles}
      </section>
    )

}

export default Feed