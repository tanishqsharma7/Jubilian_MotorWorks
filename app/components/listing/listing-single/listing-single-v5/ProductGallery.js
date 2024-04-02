"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import { useState } from "react";

const ProductGallery = () => {
  const images = [
    { src: "/images/listing/sp5s1.jpg", alt: "sp5s1.jpg" },
    { src: "/images/listing/sp5s2.jpg", alt: "sp5s2.jpg" },
    { src: "/images/listing/sp5s3.jpg", alt: "sp5s3.jpg" },
    { src: "/images/listing/sp5s4.jpg", alt: "sp5s4.jpg" },
    { src: "/images/listing/sp5s5.jpg", alt: "sp5s5.jpg" },
    { src: "/images/listing/sp5s6.jpg", alt: "sp5s6.jpg" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="BS2jGGYC60c" // Replace "VIDEO_ID" with your actual YouTube video ID
        onClose={closeModal}
      />

      <div className="row mb30">
        <div className="col-lg-7 col-xl-8">
          <div className="single_product_grid single_page1">
            <div className="sps_content">
              <div className="thumb">
                <div className="single_product">
                  <div className="single_item">
                    <div className="thumb">
                      <div className="tags">FEATURED</div>
                      <img
                        className="img-fluid"
                        src="/images/listing/lsp5-v2.jpg"
                        alt="lsp5-v2.jpg"
                      />
                    </div>
                  </div>
                  <div className="overlay_icon">
                    <button
                      role="button"
                      onClick={openModal}
                      className="video_popup_btn popup-img popup-youtube"
                    >
                      <span className="flaticon-play-button"></span>Video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-xl-4">
          <Gallery>
            <div className="row">
              {images.map((image, index) => (
                <div
                  className="col-xxs-6 col-xs-3 col-sm-3 col-md-6"
                  key={index}
                >
                  <Item
                    original={image.src}
                    thumbnail={image.src}
                    width={410}
                    height={330}
                    alt={image.alt}
                  >
                    {({ ref, open }) => (
                      <div className="sp5_small_img mb25">
                        <div className="thumb">
                          <div className="popup-img">
                            <Image
                              width={196}
                              height={158}
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                              }}
                              ref={ref}
                              onClick={open}
                              className="img-whp pointer"
                              src={image.src}
                              alt={image.alt}
                            />
                          </div>
                          {index === images.length - 1 && (
                            <div className="overlay popup-img pe-none">
                              <span className="flaticon-photo-camera"></span>
                              <h5 className="title">Show All Photo</h5>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </Item>
                </div>
              ))}
            </div>
          </Gallery>
        </div>
      </div>
    </>
  );
};

export default ProductGallery;
