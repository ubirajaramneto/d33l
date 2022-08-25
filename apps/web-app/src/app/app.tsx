// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import {AutoComplete} from "@d33l/ui";

export function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <AutoComplete/>
    </div>
  );
}

export default App;
