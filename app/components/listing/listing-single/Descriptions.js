const Descriptions = () => {
  const paragraphs = [
    {
      className: "first-para",
      content:
        "The all-new Volvo XC60 is a terrific luxury compact SUV. It's been fully redesigned for 2017 and features improvements across the board. These changes bump the vehicle from its previous midpack standing; it now resides with some of the best in the class. Some of the most notable improvements include a state-of-the-art infotainment system, more legroom for rear-seat riders, and peppy engine choices.",
    },
    {
      className: "mb25",
      content:
        "Occupying over 8,000 square feet, perched over 1,100 feet in the air with absolutely breathtaking panoramic 360-degree views of all of New York City and the surrounding tri-state area, The 82nd Floor at 432 Park Avenue has been completely reimagined by one of the most sought-after design houses in London and represents an utterly unique opportunity to own a globally significant property.",
    },
    {
      className: "mt10 mb20",
      content:
        "The Amrutha Lounge means port in the Turkish language, however the restaurant opens its doors to all aspects of the Mediterranean kitchen. The kitchen will be mostly focused on Mediterranean food; the owners of the restaurant are young professional chefs who can bring new, exciting tastes to Angel, Islington which will show through in the quality of food they prepare.",
    },
  ];

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p className={paragraph.className} key={index}>
          {paragraph.content}
        </p>
      ))}
    </>
  );
};

export default Descriptions;
