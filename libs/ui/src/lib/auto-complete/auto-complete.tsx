import React, { useEffect, useState } from 'react';
import Suggestions from '../suggestions/suggestions';
import { Product } from '@d33l/interfaces';

/* eslint-disable-next-line */
export interface AutoCompleteProps {
  filterHandler: (searchTerm: string) => Promise<Array<Product>>;
}

export function AutoComplete({ filterHandler }: AutoCompleteProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<Array<Product>>([]);
  let timeout: NodeJS.Timeout;

  // we don't want to search on every keystroke, so we will debounce here.
  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      setSearchTerm(e.target.value);
    }, 500);
  };

  useEffect(() => {
    const filtered = async () => {
      const items = await filterHandler(searchTerm);
      setFilteredItems(items);
    };
    if (searchTerm) {
      filtered();
    } else {
      setFilteredItems([]);
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
        <Suggestions data={filteredItems} term={searchTerm} />
      </div>
    </div>
  );
}

export default AutoComplete;
