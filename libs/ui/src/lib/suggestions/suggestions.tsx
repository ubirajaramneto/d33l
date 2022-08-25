import styles from './suggestions.module.scss';
import Highlight from "../highlight/highlight";

export interface ProductSuggestion {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
  term: string;
}

/* eslint-disable-next-line */
export interface SuggestionsProps {
  data: Array<ProductSuggestion>;
}

/*
* [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
        "images": [
            "https://dummyjson.com/image/i/products/1/1.jpg",
            "https://dummyjson.com/image/i/products/1/2.jpg",
            "https://dummyjson.com/image/i/products/1/3.jpg",
            "https://dummyjson.com/image/i/products/1/4.jpg",
            "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
        ]
    }
]
* */

export function Suggestions({data}: SuggestionsProps) {
  if (data.length === 0) return null;

  return (
    <div className="border-solid border-2 border-slate-400 rounded-lg relative">
      <ul>
        {data.map((item: ProductSuggestion) => {
          return (
            <li key={item.id}>
              <div className="flex justify-start items-center m-4 hover:bg-slate-100">
                <img src={item.thumbnail} alt="" width="80px" height="80px" />
                <div className="text-slate-500">
                  <p>Title: <Highlight text={item.title} term={item.term} /></p>
                  <p>Price: {item.price}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Suggestions;
