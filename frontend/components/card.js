import React from "react";
import Link from "next/link";
import { getStrapiMedia } from "../lib/media";

const Card = ({ article }) => {
  const articleImage = getStrapiMedia(article.image);
  return (
    <div className="flex flex-col">
      <Link as={`/blog/article/${article.slug}`} href="/blog/article/[id]">
        <a>
          <div className="h-60 md:h-80 bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${articleImage})`}}></div>
          <div>
            <p className="text-xl my-2">
              {article.title}
            </p>
            {article.category && (
              <p>
              {article.category.name}
            </p>
            )}
          </div>
        </a>
      </Link>
    </div>
    
  );
};

export default Card;
