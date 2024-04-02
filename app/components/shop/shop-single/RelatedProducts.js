"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import Image from "next/image";

const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      imageSrc: "/images/shop/1.png",
      title: "12v Compact Battery Jump Starter",
      rating: 4.7,
      price: 129,
    },
    {
      id: 2,
      imageSrc: "/images/shop/2.png",
      title: "12v Compact Battery Jump Starter",
      rating: 4.7,
      price: 129,
    },
    {
      id: 3,
      imageSrc: "/images/shop/3.png",
      title: "12v Compact Battery Jump Starter",
      rating: 4.7,
      price: 129,
    },
    {
      id: 4,
      imageSrc: "/images/shop/4.png",
      title: "12v Compact Battery Jump Starter",
      rating: 4.7,
      price: 129,
    },
    {
      id: 5,
      imageSrc: "/images/shop/5.png",
      title: "12v Compact Battery Jump Starter",
      rating: 4.7,
      price: 129,
    },
    {
      id: 6,
      imageSrc: "/images/shop/6.png",
      title: "12v Compact Battery Jump Starter",
      rating: 4.7,
      price: 129,
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={20}
        speed={1000}
        modules={[Pagination]}
        pagination={{
          el: ".shop-related-pagination",
          spaceBetween: 10,
          clickable: true,
        }}
        breakpoints={{
          // breakpoints for responsive design
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1068: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="item">
              <div className="shop_item">
                <Link href="/shop-single" className="thumb">
                  <Image
                    width={248}
                    height={248}
                    src={product.imageSrc}
                    alt={`${product.id}.png`}
                  />
                </Link>
                <div className="details">
                  <div className="title">
                    <Link href="/shop-single">{product.title}</Link>
                  </div>
                  <div className="review">
                    <ul className="mb0">
                      {/* Rating stars */}
                      {[...Array(5)].map((_, index) => (
                        <li className="list-inline-item" key={index}>
                          <a href="#">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                      ))}
                      <li className="list-inline-item">{product.rating}</li>
                    </ul>
                  </div>

                  <div className="si_footer">
                    <div className="price float-start">
                      <small>
                        <del>$129</del>
                      </small>
                      ${product.price}
                    </div>
                    <Link href="/shop-single" className="cart_btn float-end">
                      <Image
                        width={12}
                        height={14}
                        src="/images/shop/cart-bag.svg"
                        alt="cart-bag.svg"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-3 text-center">
        <div className="shop-related-pagination" />
      </div>
    </>
  );
};

export default RelatedProducts;
