import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  if(media !== null && media !== undefined) {
    const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
    return imageUrl;
  } else {
    return 'https://via.placeholder.com/1600x400.png?text=Placeholder'
  }
  
}
