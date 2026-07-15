import "./SearchBar.css";

function SearchBar() {
  return (
    <section className="search-container">
      <h2>Search Your Dream Job</h2>

      <div className="search-box">

        <input
          type="text"
          placeholder="Job Title"
        />

        <input
          type="text"
          placeholder="Location"
        />

        <button>Search</button>

      </div>
    </section>
  );
}

export default SearchBar;