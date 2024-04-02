const Card = () => {
  const cards = [
    {
      icon: "flaticon-list",
      timer: "1260",
      para: "Total Listing",
      className: "ff_one",
    },
    {
      icon: "flaticon-message",
      timer: "74",
      para: "Messages",
      className: "ff_one style2",
    },
    {
      icon: "flaticon-heart",
      timer: "20",
      para: "Favorites",
      className: "ff_one style3",
    },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <div className="col-sm-6 col-lg-4" key={index}>
          <div className={card.className}>
            <div className="icon">
              <span className={card.icon} />
            </div>
            <div className="detais text-end">
              <div className="timer">{card.timer}</div>
              <p className="para">{card.para}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
