import Image from "next/image";
import Link from "next/link";

const RecentPost = () => {
  const recentPosts = [
    {
      title: "BMW M8 Gran Coupe Base - 2021",
      imageSrc: "/images/blog/s1.jpg",
      alt: "1.jpg",
    },
    {
      title: "Bentley Bentayga V8 - 2020",
      imageSrc: "/images/blog/s2.jpg",
      alt: "s2.jpg",
    },
    {
      title: "Ferrari 488 Spider Base - 2019",
      imageSrc: "/images/blog/s3.jpg",
      alt: "s3.jpg",
    },
  ];

  return (
    <>
      {recentPosts.map((post, index) => (
        <div className="d-flex" key={index}>
          <div className="flex-shrink-0">
            <Image
              width={90}
              height={80}
              style={{ objectFit: "cover" }}
              className="align-self-start mr-3"
              src={post.imageSrc}
              alt={post.alt}
            />
          </div>
          <div className="flex-grow-1 ms-3">
            <h5 className="post_title">
              <Link href="/">{post.title}</Link>
            </h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentPost;
