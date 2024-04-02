const ServiceHours = () => {
  const days = [
    { day: "Sunday", schedule: "10:00 - 17:00" },
    { day: "Monday", schedule: "10:00 - 17:00" },
    { day: "Tuesday", schedule: "10:00 - 17:00" },
    { day: "Wednesday", schedule: "10:00 - 17:00" },
    { day: "Thursday", schedule: "10:00 - 17:00" },
    { day: "Friday", schedule: "10:00 - 17:00" },
    { day: "Saturday", schedule: "10:00 - 17:00" },
  ];

  return (
    <ul className="list-group">
      {days.map((item, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between align-items-start"
        >
          <div className="me-auto">
            <div className="day">{item.day}</div>
          </div>
          <span className="schedule">{item.schedule}</span>
        </li>
      ))}
    </ul>
  );
};

export default ServiceHours;
