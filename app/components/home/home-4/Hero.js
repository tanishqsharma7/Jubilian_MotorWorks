import Image from "next/image";
import HeroFilter from "./HeroFilter";

const Hero = () => {
  return (
    <section className="home-one home4_style bgc_home4_style bg-home4">
      <div className="container">
        <div className="row posr">
          <div className="col-xl-11 col-xxl-10 m-auto">
            <div className="home_content home1_style at_home4">
              <div className="home-text text-center mb30">
                <h2 className="title">
                  <span className="aminated-object1">
                    <Image
                      width={110}
                      height={14}
                      style={{
                        objectFit: "contain",
                      }}
                      priority
                      className="objects"
                      src="/images/home/title-bottom-border.svg"
                      alt="img"
                    />
                  </span>
                  Search Less. Live More.
                </h2>
                <p className="para">We make finding the right car simple</p>
              </div>
              <div className="advance_search_panel">
                <div className="row">
                  <HeroFilter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
