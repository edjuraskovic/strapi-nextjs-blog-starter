import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../../lib/api";
import Layout from "../../../components/layout";
import Image from "../../../components/image";
import Seo from "../../../components/seo";
import { getStrapiMedia } from "../../../lib/media";

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image);

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  const articleAuthor = article.author;

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <article className="max-w-screen-2xl my-0 mx-auto p-4">
        <h1 className="text-4xl md:text-6xl text-center my-12 md:my-16 font-bold">{article.title}</h1>
        <div
          className="min-h-banner-sm lg:min-h-banner-md bg-cover bg-no-repeat bg-center"
          style={{backgroundImage: `url(${imageUrl})`}}
        ></div>
        <div className="my-6">
          <div className="">
            <ReactMarkdown source={article.content} escapeHtml={false} />
            <hr className="my-4" />
            <div className="my-6">
              <div>
                {articleAuthor ? (
                  article.author.picture && (
                    <Image
                      image={article.author.picture}
                      style={{
                        position: "static",
                        borderRadius: "50%",
                        height: 30,
                      }}
                    />
                  )
                ): (
                  <div>belli</div>
                )}
              </div>
              <div className="uk-width-expand">
                <div className="uk-margin-remove-bottom">
                  {articleAuthor ? (
                    <div>By {article.author.name}</div>
                  ): (
                    <div>By domain name</div>
                  )}
                  
                </div>
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
