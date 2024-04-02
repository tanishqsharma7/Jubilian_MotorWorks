const days = [
    { name: "Sunday", hours: "10:00 - 17:00" },
    { name: "Monday", hours: "10:00 - 17:00" },
    { name: "Tuesday", hours: "10:00 - 17:00" },
    { name: "Wednesday", hours: "10:00 - 17:00" },
    { name: "Thursday", hours: "10:00 - 17:00" },
    { name: "Friday", hours: "10:00 - 17:00" },
    { name: "Saturday", hours: "10:00 - 17:00" },
];

const OpeningHours = () => {
    return (
        <ul className="list-group">
            {days.map((day) => (
                <li
                    key={day.name}
                    className="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div className="me-auto">
                        <div className="day">{day.name}</div>
                    </div>
                    <span className="schedule">{day.hours}</span>
                </li>
            ))}
        </ul>
    );
};

export default OpeningHours;
