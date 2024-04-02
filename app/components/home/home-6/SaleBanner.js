const saleBanners = [
  {
    id: 1,
    icon: "flaticon-car-1",
    title: "Are You looking for a car?",
    description:
      "Search your car in our Inventory and request a quote on the vehicle of your choosing.",
    dataAosDelay: "100",
    iconClassName: "icon me-2 wobble-horizontal",
    styleClassName:
      "iconbox_home2 home6_style d-block d-lg-flex mb30-sm text-center text-md-start",
    detailsClassName: "details ms-0 ms-lg-4",
  },
  {
    id: 2,
    icon: "flaticon-car-2",
    title: "Want to drive so long?",
    description:
      "Request search your car in our Inventory and a quote on the vehicle of your choosing.",
    dataAosDelay: "200",
    styleClassName: "iconbox_home2 home6_style style2 text-center text-md-end",
    iconClassName:
      "icon float-none float-lg-end ms-0 ms-lg-4 wobble-horizontal",
    detailsClassName: "details",
  },
];

const SaleBanner = () => {
  return (
    <>
      {saleBanners.map((banner) => (
        <div
          key={banner.id}
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay={banner.dataAosDelay}
        >
          <div className={banner.styleClassName}>
            <div className={banner.iconClassName}>
              <span className={banner.icon} />
            </div>
            <div className={banner.detailsClassName}>
              <h3 className="title">{banner.title}</h3>
              <p>{banner.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SaleBanner;
