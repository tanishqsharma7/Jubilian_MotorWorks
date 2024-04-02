import Image from "next/image";
import Link from "next/link";

const RecentPost = () => {
  const recentPosts = [
    {
      imgSrc: "/images/shop/s1.png",
      imgAlt: "1.png",
      price: "$129",
      title: "USB Air Compressor",
    },
    {
      imgSrc: "/images/shop/s2.png",
      imgAlt: "s2.png",
      price: "$129",
      title: "Ninja Sound",
      description: "",
    },
    {
      imgSrc: "/images/shop/s3.png",
      imgAlt: "s3.png",
      price: "$129",
      title: "Car mats for BMW F10",
    },
  ];

  return (
    <>
      {recentPosts.map((post, index) => (
        <div className="d-flex mb20" key={index}>
          <div className="flex-shrink-0">
            <Image
              width={60}
              height={60}
              className="align-self-start mr-3"
              src={post.imgSrc}
              alt={post.imgAlt}
            />
          </div>
          <div className="flex-grow-1 ms-3">
            <h5 className="post_title">{post.price}</h5>
            <p>
              <Link href="/shop-single">{post.title}</Link>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentPost;
