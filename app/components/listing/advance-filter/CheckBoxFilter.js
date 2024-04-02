const CheckBoxFilter = () => {
    const checkboxes = [
        {
            id: "customCheck1",
            label: "Adaptive Cruise Control (6,676)",
        },
        {
            id: "customCheck2",
            label: "Cooled Seats (9,784)",
        },
        {
            id: "customCheck3",
            label: "Keyless Start (9,784)",
        },
        {
            id: "customCheck4",
            label: "Navigation System (9,784)",
        },
        {
            id: "customCheck5",
            label: "Remote Start (9,784)",
        },
    ];

    return (
        <div className="advance_search_style">
            <div className="ui_kit_checkbox text-start me-3">
                {checkboxes.slice(0, 3).map((checkbox) => (
                    <div className="df mb20" key={checkbox.id}>
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id={checkbox.id}
                        />
                        <label
                            className="custom-control-label"
                            htmlFor={checkbox.id}
                        >
                            {checkbox.label}
                        </label>
                    </div>
                ))}
            </div>
            {/* End .ui_kit_checkbox */}

            <div className="ui_kit_checkbox text-start">
                {checkboxes.slice(3).map((checkbox) => (
                    <div className="df mb20" key={checkbox.id}>
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id={checkbox.id}
                        />
                        <label
                            className="custom-control-label"
                            htmlFor={checkbox.id}
                        >
                            {checkbox.label}
                        </label>
                    </div>
                ))}
            </div>
            {/* End .ui_kit_checkbox */}
        </div>
    );
};

export default CheckBoxFilter;
