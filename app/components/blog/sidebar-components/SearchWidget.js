const SearchWidget = () => {
  return (
    <div className="blog_search_widget">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Keyword"
          aria-label="Recipient's username"
        />
      </div>
    </div>
  );
};

export default SearchWidget;
