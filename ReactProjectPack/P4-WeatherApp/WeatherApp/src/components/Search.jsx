function SearchWeather({ search, setSearch, handleSearch, handleKeyPress }) {
  return (
    <div className="search-container">
      <div>
        <h1 className="search-title">
        Weather<span className="accent">Pro</span>
      </h1>
      <p className="search-text">Get real-time weather for any city worldwide</p>
    
        </div>  
      <div className="search-box">
        <input
          className="search-input"
          type="text"
          placeholder="Search city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchWeather;