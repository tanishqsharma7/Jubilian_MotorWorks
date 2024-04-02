import Map from "../../common/Map";

const Address = () => {
  const footerData = [
    {
      title: "Our Address",
      text: (
        <>
          Germany —<br /> 329 Queensberry Street, <br /> North Melbourne VIC
          3051
        </>
      ),
    },
    {
      title: "OPENING HOURS",
      text: (
        <>
          Monday – Friday: 09:00AM – 09:00PM
          <br /> Saturday: 09:00AM – 07:00PM
          <br /> Sunday: Closed
        </>
      ),
    },
  ];

  return (
    <>
      <div
        className="col-md-5 col-lg-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="contact-info mb30">
          {footerData.map((data, index) => (
            <div
              className={`footer_widget home2  ${
                index === 0
                  ? "footer_about_widget mb50"
                  : "footer_contact_widget mb30"
              }`}
              key={index}
            >
              <h4 className="fz16">{data.title}</h4>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
      {/* End .col-md-5 */}

      <div
        className="col-md-7 col-lg-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="our-map mb30 bdrs8 ovh">
          <div className="h400 map_in">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
