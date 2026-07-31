import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  author->{
    name
  },
  category->{
    title
  }
}
`;

export const POST_QUERY = groq`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  mainImage,
  author->{
    name,
    image
  },
  category->{
    title
  }
}
`;