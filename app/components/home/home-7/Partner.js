import Image from "next/image";

const partners = [
  { imgPath: "/images/partners/1.png", delay: 100 },
  { imgPath: "/images/partners/2.png", delay: 300 },
  { imgPath: "/images/partners/3.png", delay: 500 },
  { imgPath: "/images/partners/4.png", delay: 700 },
  { imgPath: "/images/partners/5.png", delay: 900 },
  { imgPath: "/images/partners/6.png", delay: 1100 },
];

const Partner = () => {
  return (
    <>
      {partners.map((partner, index) => (
        <div
          key={index}
          className="col-sm-6"
          data-aos="fade-up"
          data-aos-delay={partner.delay}
        >
          <div className="partner_item home4_style">
            <Image
              width={130}
              height={20}
              style={{ objectFit: "contain" }}
              src={partner.imgPath}
              alt={`partner-${index}`}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Partner;
