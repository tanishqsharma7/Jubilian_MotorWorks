import Image from "next/image";

const Testimonial = () => {
  const testimonialsData = [
    {
      id: "1",
      name: "Sunny",
      role: "Software Engineer",
      imageSrc: "/images/testimonial/sunny.webp",
      quote:
        "Jubilian MotorWorks offers a seamless online experience for buying used cars. With their extensive inventory and user-friendly interface, finding your dream car has never been easier!",
    },
    {
      id: "2",
      name: "Naveen",
      role: "Frontend Developer",
      imageSrc: "/images/testimonial/naveen.jpg",
      quote:
        "At Jubilian MotorWorks, finding quality used cars is a breeze. With their intuitive website and diverse selection, it's the go-to destination for hassle-free car shopping.",
    },
    {
      id: "3",
      name: "Riya",
      role: "Sales Lead",
      imageSrc: "/images/testimonial/riya.jpg",
      quote:
        "Jubilian MotorWorks simplifies the used car buying process with their user-friendly website and top-notch inventory. A trustworthy destination for finding your next ride!",
    },
  ];

  return (
    <>
      <div
        className="home2_testimonial_tabs"
        data-aos="fade-in"
        data-aos-delay="100"
      >
        <div className="tab-content" id="pills-tabContent2">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`tab-pane fade ${
                testimonial.id === "2" ? "show active" : ""
              }`}
              id={`pills-${testimonial.id}`}
              role="tabpanel"
              aria-labelledby={`pills-${testimonial.id}-tab`}
            >
              <div className="testimonial_post_home2 text-center">
                <div className="details">
                  <p>{testimonial.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End tab-conntet */}

        <ul
          className="nav justify-content-center mb-3"
          id="pills-tab2"
          role="tablist"
        >
          {testimonialsData.map((testimonial) => (
            <li className="nav-item" role="presentation" key={testimonial.id}>
              <a
                className={`nav-link ${testimonial.id === "2" ? "active" : ""}`}
                id={`pills-${testimonial.id}-tab`}
                data-bs-toggle="pill"
                href={`#pills-${testimonial.id}`}
                role="tab"
                aria-controls={`pills-${testimonial.id}`}
                aria-selected={testimonial.id === "2" ? "true" : "false"}
              >
                <div className="thumb d-inline-flex">
                  <Image
                    width={70}
                    height={70}
                    priority
                    className="rounded-circle"
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                  />
                  <h4 className="title">
                    {testimonial.name}
                    <br />
                    <small>{testimonial.role}</small>
                  </h4>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Testimonial;
