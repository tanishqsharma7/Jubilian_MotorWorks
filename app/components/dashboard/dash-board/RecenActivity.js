import Image from "next/image";

const RecenActivity = () => {
  const activities = [
    {
      icon: "/images/icon/briefcase-blue.svg",
      text: (
        <>
          <span className="heading-color">Wade Warren</span> add list for a car{" "}
          <span className="color-blue">Audi a3 Sportback 2020</span>
        </>
      ),
      className: "blue",
    },
    {
      icon: "/images/icon/briefcase-blue.svg",
      text: (
        <>
          <span className="heading-color">Wade Warren</span> add list for a car{" "}
          <span className="color-blue">Audi a5 Sportback 2020</span>
        </>
      ),
      className: "blue",
    },
    {
      icon: "/images/icon/briefcase-green.svg",
      text: (
        <>
          <span className="heading-color">Wade Warren</span> Saved for a car
          Mercedes cla 2021
        </>
      ),
      className: "green",
    },
    {
      icon: "/images/icon/briefcase-blue.svg",
      text: (
        <>
          <span className="heading-color">Wade Warren</span> add list for a car{" "}
          <span className="color-blue">Audi q5 Sportback 2020</span>
        </>
      ),
      className: "blue",
    },
    {
      icon: "/images/icon/briefcase-green.svg",
      text: (
        <>
          <span className="heading-color">Wade Warren</span> Saved for a car
          Mercedes c-class 2021
        </>
      ),
      className: "green",
    },
    {
      icon: "/images/icon/briefcase-blue.svg",
      text: (
        <>
          <span className="heading-color">Wade Warren</span> add list for a car{" "}
          <span className="color-blue">Audi a3 Sportback 2020</span>
        </>
      ),
      className: "blue",
    },
  ];

  return (
    <>
      {activities.map((activity, index) => (
        <div className={`grid d-block d-sm-flex`} key={index}>
          <div className={`icon ${activity.className}`}>
            <span>
              <Image
                width={14}
                height={14}
                src={activity.icon}
                alt={`briefcase-${activity.className}.svg`}
              />
            </span>
          </div>
          <p>{activity.text}</p>
        </div>
      ))}
    </>
  );
};

export default RecenActivity;
