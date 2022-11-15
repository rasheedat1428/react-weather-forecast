import React from 'react'

const SearchBar = ({query, search, setQuery}) => {
  return (
    <div className="search-box">
        <input
            type="text"
            className='search-bar'
            placeholder='Search...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={search}
        />
    </div>
  )
}

export default SearchBar