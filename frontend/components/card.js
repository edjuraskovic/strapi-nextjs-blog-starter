import React from "react";
import Link from "next/link";
import { getStrapiMedia } from "../lib/media";

const Card = ({ article }) => {
  const articleImage = getStrapiMedia(article.image);
  return (
    <div className="break-inside p-4 my-4 card">
      <Link as={`/blog/article/${article.slug}`} href="/blog/article/[id]">
        <a>
          <div className="h-60 md:h-80 bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${articleImage})`}}></div>
          <div className="min-h-[150px] p-6">
            <p className="text-xl my-2 font-bold">
              {article.title}
            </p>
            <p className="my-2">
              {article.description}
            </p>
            {article.category && (
              <div>
                <small>
                  # {article.category.name}
                </small>
              </div>
            )}
          </div>
        </a>
      </Link>
    </div>
    
  );
};

export default Card;
