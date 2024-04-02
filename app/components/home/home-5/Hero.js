"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="NMThdHhrLoM"
        onClose={() => setOpen(false)}
      />

      <section className="home-one home5_style bg-home5 p0 mt70-992">
        <div className="container">
          <div className="row posr">
            <div className="col-lg-12">
              <div className="home_content_home5_style">
                <div className="wrapper mb30 mb0-sm ">
                  <h2 className="title">
                    <span className="aminated-object1">
                      <Image
                        width={110}
                        height={14}
                        style={{
                          objectFit: "cover",
                        }}
                        priority
                        className="objects"
                        src="/images/home/title-bottom-border.svg"
                        alt="border img"
                      />
                    </span>
                    20.597
                  </h2>
                  <h2 className="title">Vehicle Available</h2>
                  <p className="para">
                    Find the right price, dealer and advice.
                  </p>
                  <div className="home5_button_content d-block d-sm-flex">
                    <Link
                      className="btn btn-thm me-0 me-sm-1"
                      href="/listing-single-v1"
                    >
                      Learn More
                    </Link>
                    <p className="calltext ms-0 ms-sm-4 mt-3">
                      CALL US NOW <br />
                      <Link className="text-thm phone_number" href="/about-us">
                        +1 670 936 46 70
                      </Link>
                    </p>
                  </div>
                  <div className="video_pop uv3_style">
                    <div className="video_popup_icon">
                      <button
                        className="video_popup_btn popup-img popup-youtube"
                        role="button"
                        onClick={() => setOpen(true)}
                      >
                        <span className="flaticon-play" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
