import blogPosts from "@/data/blog";
import Image from "next/image";
import Link from "next/link";

const BlogList = () => {
  return (
    <>
      {blogPosts.slice(0, 4).map((post) => (
        <div key={post.id} className="main_blog_post_content">
          <div className="for_blog list-type">
            <div className="thumb">
              <div className="tag">{post.tag}</div>
              <Image
                width={394}
                height={251}
                style={{ objectFit: "cover" }}
                className="img-whp"
                src={post.imgSrc}
                alt={post.title}
              />
            </div>
            <div className="details">
              <div className="wrapper">
                <div className="bp_meta">
                  <ul>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-user" />
                        {post.author}
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-chat" />
                        {post.numComments} Comments
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="flaticon-calendar-1" />
                        {post.date}
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className="title">
                  <Link href="/blog-single">{post.title}</Link>
                </h4>
                <Link href="/blog-single" className="more_listing">
                  Read More{" "}
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogList;
