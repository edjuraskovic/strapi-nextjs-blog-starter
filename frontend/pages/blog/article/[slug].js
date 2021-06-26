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
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1>{article.title}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown source={article.content} escapeHtml={false} />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
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
