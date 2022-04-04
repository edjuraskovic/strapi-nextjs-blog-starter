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
    <section className="max-w-screen-2xl">
        {posts.length > 0 ? (
          <InfiniteScroll
          dataLength={posts.length}
          next={getMorePost}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <div className="my-12 p-4 mx-auto flex justify-center">
              <span>Yay! You have seen all posts</span>
            </div>
          }
        >
          <div className="md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit">
            {posts.map((data) => (
              <div key={data.id} className="rounded-lg my-12">
                <Card article={data} key={data.slug} />
                {data.completed}
              </div>
            ))}
          </div>
        </InfiniteScroll>
        ): (
          <div className="my-8">
            <p className="text-xl">Content comming soon</p>
          </div>
        )}
    </section>
  );
};

export default Articles;
