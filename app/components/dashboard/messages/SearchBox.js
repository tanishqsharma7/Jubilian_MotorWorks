const SearchBox = () => {
  return (
    <form className="row-cols-lg-auto g-3 align-items-center">
      <button className="btn" type="submit">
        <span className="flaticon-magnifiying-glass" />
      </button>
      <input
        className="form-control"
        type="search"
        placeholder="Serach"
        aria-label="Search"
      />
    </form>
  );
};

export default SearchBox;
