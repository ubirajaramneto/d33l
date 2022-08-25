// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import {AutoComplete} from "@d33l/ui";
import * as mockData from '../_mock/products.json';

const partialData = mockData.products.slice(0, 5);

export function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <AutoComplete data={partialData}/>
    </div>
  );
}

export default App;
