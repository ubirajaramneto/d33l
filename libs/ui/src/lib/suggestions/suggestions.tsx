import Highlight from '../highlight/highlight';
import { Product } from '@d33l/interfaces';

// NOTE: The design for this solution includes that for every filtered product, there will be an added term property,
// the reason is that we can pass the search term that was used along with the data object, so we can use it
// down the line without doing too much back and forth in order to know what the search term was.

// NOTE 2: This component is not general enough to accept any kind of data, and this was by design for simplicity.
// For a real production level component, the types it would accept would need to be generalized.

interface SuggestionsProps {
  data: Array<Product>;
  term: string;
}

export function Suggestions({ data, term }: SuggestionsProps) {
  if (data.length === 0 && term.length > 0)
    return <small className="absolute text-slate-500">No results found...</small>;
  if (data.length === 0)
    return <small className="absolute text-slate-500">for example mac...</small>;

  return (
    <div className="absolute border-solid border-2 border-slate-400 rounded-lg max-h-[300px] w-[431px] overflow-y-auto">
      <ul>
        {data.map((item: Product) => {
          return (
            <li key={item.id}>
              <div className="flex justify-start items-center m-4 hover:bg-slate-100">
                <img src={item.thumbnail} alt="" width="80px" height="80px" />
                <div className="text-slate-500">
                  <p>
                    Title: <Highlight text={item.title} term={item.term} />
                  </p>
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
