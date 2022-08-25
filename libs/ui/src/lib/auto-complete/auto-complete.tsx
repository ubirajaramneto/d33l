import styles from './auto-complete.module.scss';
import React, { useEffect, useState } from 'react';
import Suggestions, { ProductSuggestion } from '../suggestions/suggestions';

/* eslint-disable-next-line */
export interface AutoCompleteProps {
  data: any;
}

export function AutoComplete(props: AutoCompleteProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  let timeout: NodeJS.Timeout;

  // we don't want to search on every keystroke, so we will debounce here.
  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      setSearchTerm(e.target.value);
    }, 500);
  };

  useEffect(() => {
    if (searchTerm) {
      const filtered = props.data
        ?.filter((item: ProductSuggestion) => {
          return item.title.includes(searchTerm);
        })
        .map((item: ProductSuggestion) => {
          return {...item, term: searchTerm};
        });
      setFilteredItems(filtered);
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        id="auto-complete-input"
        type="text"
        placeholder="Search for a product"
        className="p-8 border-solid border-2 border-slate-300 rounded-lg text-2xl text-slate-500"
        onChange={handleSearchTermChange}
      />
      <div id="auto-complete-container">
        <Suggestions data={filteredItems} />
      </div>
    </div>
  );
}

export default AutoComplete;
