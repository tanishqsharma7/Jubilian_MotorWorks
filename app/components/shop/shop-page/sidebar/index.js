import Categories from "./Categories";
import RecentPost from "./RecentPost";

const Sidebar = () => {
  return (
    <div className="sidebar_listing_grid1 mb30">
      <div className="sidebar_listing_list">
        <div className="shop_category_sidebar_widgets">
          <h4 className="title">Categories</h4>
          <div className="widget_list">
            <Categories />
          </div>
        </div>
        {/* End Categories */}

        <div className="sidebar_shop_recent_post">
          <h4 className="title">Recent Posts</h4>
          <RecentPost />
        </div>
        {/* End .sidebar_shop_recent_post */}
      </div>
    </div>
  );
};

export default Sidebar;
