// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AutoComplete } from '@d33l/ui';
import { Product } from '@d33l/interfaces';
import * as mockData from '../_mock/products.json';

// NOTE: This is the father component, the H in HOC.
// Its responsibility is to hold all the data and logic and pass it down to the components.

const products: Array<Product> = mockData.products;

async function filter(searchTerm: string) {
  return products
    ?.filter((item: Product) => {
      return item.title.includes(searchTerm);
    })
    .map((item: Product) => {
      return { ...item, term: searchTerm };
    });
}

export function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <AutoComplete filterHandler={filter} />
      </div>
      <div className="absolute bottom-4 right-4 bg-slate-200 p-4 rounded-lg">
        <p className="">Made with &#10084; by Ubi</p>
      </div>
    </>
  );
}

export default App;
