
export interface IBook {
  title: string;
  price: number;
  rating: number;
  author: string;
  description: string;
  publication: string;
  category: string;
  imageUrl: string;
  pages: number;
  reviews: IBookReview[];
}

export interface IBookReview {
  personName: string;
  personRating: number;
  reviewDescription: string;
}
