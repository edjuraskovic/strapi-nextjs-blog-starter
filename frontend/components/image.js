import { getStrapiMedia } from "../lib/media";

const Image = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);

  let alt = '';
  if(!image ) {
    alt = 'hello viki'
  } else {
    alt= image.alternativeText || image.name
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      style={style}
      className="w-full"
    />
  );
};

export default Image;
