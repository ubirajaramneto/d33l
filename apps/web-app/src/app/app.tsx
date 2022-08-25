// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import {AutoComplete} from "@d33l/ui";
import * as mockData from '../_mock/products.json';

export function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <AutoComplete data={mockData.products}/>
    </div>
  );
}

export default App;
