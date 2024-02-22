import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement your search logic here based on the 'searchQuery' state
    console.log('Searching for:', searchQuery);
  };
    return (
      <>
  <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
  
      </>
   
    );
  }
  export default SearchBar;


