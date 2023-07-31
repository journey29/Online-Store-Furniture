export interface ICart {
  title: string,
  price: number,
  img: string,
  inputValue: number
  info:string
}

export interface IWishItem {
  title: string,
  price: number,
  img: string,
  added: boolean
}

export interface ISort {
  [key:string]:string
}

export interface IAsideItems {
  [key: string]: {
    [key: string]: {
      title: string;
      listItems: string[];
    }
  };
};

export interface IProduct {
  title: string,
  price: number,
  info:string,
  imageUrl: string,
  id: string,
  rating: number,
  sales: number,
  date: number,
  vendor: string,
  type: string,
  available: boolean,
  reviews: IReviews[],
  material: IMaterial,
  style: IStyle
}

interface IMaterial {
  [key: string]: boolean
}

type IStyle = {
  [key: string]: boolean;
}

interface IReviews {
  id:string
  reviewTitle: string,
  reviewBody: string,
  reviewRating: number,
  authorName: string,
  authorEmail: string,
  reviewDate: string
}


export interface INews {
  id: string
  author: string,
  image: string,
  date: string,
  title: string,
  description: string,
  asideDescription: string,
  postText: string,
  comments: IComments[]

}
export interface IComments {
  id:string
  author: string,
  date: string,
  text: string
}

export interface IOptions {
  title:string,
  value:string
}