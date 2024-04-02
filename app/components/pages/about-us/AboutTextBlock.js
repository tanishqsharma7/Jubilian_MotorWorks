import Image from "next/image";

const AboutTextBlock = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="about_thumb mb30-md">
          <Image
            width={636}
            height={667}
            priority
            style={{ objectFit: "cover" }}
            className="thumb1"
            src="/images/header-logo.png"
            alt="1.jpg"
          />
          {/* <Image
            width={365}
            height={238}
            priority
            style={{ objectFit: "cover" }}
            className="img-fluid thumb2"
            src="/images/home/carbg4.jpg"
            alt="2.jpg"
          /> */}
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-5 offset-lg-1">
        <div className="about_content">
          <h2 className="title">Welcome To Jubilian MotorWorks</h2>
          <p className="mb30">
            Jubilian Motorworks: Your premier destination for quality used cars.
            With a curated selection and expert service, we strive to make your
            car-buying experience seamless and enjoyable. Trust Jubilian
            Motorworks for reliability and value in every vehicle
          </p>

          <a className="btn btn-thm about-btn" href="#">
            Learn More
          </a>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default AboutTextBlock;
