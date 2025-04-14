import './SearchBar.css'
function SearchBar({ search, setSearch }) {
    return (
      <input
        className='search'
        type="text"
        value={search}
        placeholder="Search expenses"
        onChange={(e) => setSearch(e.target.value)}
      />
    );
  }
  
  export default SearchBar;
  