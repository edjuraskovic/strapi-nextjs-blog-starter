import React, { useState } from "react";
import Card from "./card";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchAPI } from "../lib/api";

const Articles = ({ articles }) => {
  const [posts, setPosts] = useState(articles);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
      const res = await fetchAPI(`/articles?_start=${posts.length}&_limit=10`);

      if (res.length == 0) {
          toggleHasMore()
          return;
      }
      setPosts((post) => [...post, ...res]);
    };

    const toggleHasMore = () => setHasMore(hasMore => !hasMore);

  return (
    <div>
      <div className="uk-child-width-1" data-uk-grid="true">
        <div>
        {posts.length > 0 ? (
          <InfiniteScroll
          dataLength={posts.length}
          next={getMorePost}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {posts.map((data) => (
            <div key={data.id}>
              <div className="back" style={{textAlign: "center"}}>
                <Card article={data} key={data.slug} />
              </div>
              {data.completed}
            </div>
          ))}
        </InfiniteScroll>
        ): (
          <p>Content comming soon</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
