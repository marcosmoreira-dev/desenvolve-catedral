export interface Author {
  name: string;
  role?: string;
  image?: unknown;
}

export interface Category {
  title: string;
  slug: {
    current: string;
  };
}

export interface Post {
  _id: string;

  title: string;

  excerpt: string;

  slug: {
    current: string;
  };

  publishedAt: string;

  featured?: boolean;

  readingTime?: number;

  mainImage?: unknown;

  body?: any[];

  author?: Author;

  categories?: Category[];
}