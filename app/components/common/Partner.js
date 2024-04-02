import Image from "next/image";

const partners = [
  { imgPath: "/images/partners/1.jpeg", delay: 100 },
  { imgPath: "/images/partners/2.png", delay: 300 },
  { imgPath: "/images/partners/3.jpeg", delay: 500 },
  { imgPath: "/images/partners/4.jpeg", delay: 700 },
  { imgPath: "/images/partners/5.jpeg", delay: 900 },
  { imgPath: "/images/partners/6.jpeg", delay: 1100 },
  { imgPath: "/images/partners/7.jpeg", delay: 1100 },
  { imgPath: "/images/partners/8.jpeg", delay: 1100 },
  { imgPath: "/images/partners/9.jpeg", delay: 1100 },
  { imgPath: "/images/partners/10.jpeg", delay: 1100 },
  { imgPath: "/images/partners/11.jpeg", delay: 1100 },
  { imgPath: "/images/partners/12.jpeg", delay: 1100 },
];

const Partner = () => {
  return (
    <>
      {partners.map((partner, index) => (
        <div
          key={index}
          className="col-6 col-xs-6 col-sm-4 col-xl-2"
          data-aos="fade-up"
          data-aos-delay={partner.delay}
        >
          <div className="partner_item">
            <Image
              width={430}
              height={80}
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
