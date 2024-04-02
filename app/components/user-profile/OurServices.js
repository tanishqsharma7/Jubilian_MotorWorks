const OurServices = () => {
    const services = [
        {
            category: "Business",
            col: " col-xl-3",
            items: [
                "Home delivery",
                "Part exchange",
                "Live video viewing",
                "Finance services",
            ],
        },
        {
            category: "Other",
            col: " col-xl-3",
            items: [
                "Click and collect",
                "Extended warranties",
                "Vehicle health checks",
                "Contactless transactions",
            ],
        },
    ];
    const services2 = [
        {
            col: " col-xl-3",
            items: [
                "Home delivery",
                "Part exchange",
                "Live video viewing",
                "Finance services",
            ],
        },
        {
            col: " col-xl-3",
            items: [
                "Click and collect",
                "Extended warranties",
                "Vehicle health checks",
                "Contactless transactions",
            ],
        },
    ];

    return (
        <div className="user_profile_service">
            <div className="row">
                <div className="col-lg-12">
                    <h4 className="title">Our services</h4>
                </div>
                <div className="col-lg-4 col-xl-5">
                    <h5 className="subtitle">Business</h5>
                </div>
                {services.map((service, index) => (
                    <div key={index} className={`col-lg-4 ${service.col}`}>
                        <h5 className="subtitle">{service.category}</h5>
                        <ul className="service_list">
                            {service.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {/* End .row */}

            <hr />
            <div className="row">
                <div className="col-lg-4 col-xl-5">
                    <h5 className="subtitle">Onsite facilities</h5>
                </div>
                {services2.map((service, index) => (
                    <div key={index} className={`col-lg-4 ${service.col}`}>
                        <ul className="service_list">
                            {service.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {/* End .row */}
        </div>
    );
};

export default OurServices;
