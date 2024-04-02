import Categories from "./sidebar-components/Categories";
import RecentPost from "./sidebar-components/RecentPost";
import SearchWidget from "./sidebar-components/SearchWidget";
import Tags from "./sidebar-components/Tags";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar_search_widget">
        <h4 className="title">Search</h4>
        <SearchWidget />
      </div>
      {/* End .sidebar_search_widget */}

      <div className="terms_condition_widget">
        <h4 className="title mb20">Blog Categories</h4>
        <div className="widget_list">
          <Categories />
        </div>
      </div>
      {/* End .Categories */}

      <div className="sidebar_feature_listing">
        <h4 className="title">Recent Posts</h4>
        <RecentPost />
      </div>
      {/* End Recent Posts */}

      <div className="blog_tag_widget">
        <h4 className="title">Popular Tags</h4>
        <Tags />
      </div>
      {/* End Tags */}
    </>
  );
};

export default Sidebar;
