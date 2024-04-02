import Image from "next/image";

const Testimonial = () => {
  const testimonialsData = [
    {
      id: "1",
      imageSrc: "/images/testimonial/1.jpg",
      quote:
        "I believe in lifelong learning and Voiture is a great place to learn from experts. I've learned a lot and recommend it to all my friends. Programs are available in fall, spring, and summer semesters. Many fall and spring programs offer similar shorter programs in the summer, and some may be combined for a full academic year.",
    },
    {
      id: "2",
      imageSrc: "/images/testimonial/2.jpg",
      quote:
        "I believe in lifelong learning and Voiture is a great place to learn from experts. I've learned a lot and recommend it to all my friends. Programs are available in fall, spring, and summer semesters. Many fall and spring programs offer similar shorter programs in the summer, and some may be combined for a full academic year.",
    },
    {
      id: "3",
      imageSrc: "/images/testimonial/3.jpg",
      quote:
        "I believe in lifelong learning and Voiture is a great place to learn from experts. I've learned a lot and recommend it to all my friends. Programs are available in fall, spring, and summer semesters. Many fall and spring programs offer similar shorter programs in the summer, and some may be combined for a full academic year.",
    },
  ];

  return (
    <>
      <div
        className="home2_testimonial_tabs home6_style"
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
          className="nav justify-content-center"
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
                    style={{
                      objectFit: "cover",
                    }}
                    priority
                    className="rounded-circle"
                    src={testimonial.imageSrc}
                    alt="thumb for man"
                  />
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
