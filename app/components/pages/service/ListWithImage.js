import Image from "next/image";

const ListWithImage = () => {
    const serviceItems = [
        { text: "General Automotive Repair", link: "#" },
        { text: "Preventative Car Maintenance", link: "#" },
        { text: "Air Conditioning and Heater Service", link: "#" },
        { text: "Cooling System and Radiator Repair", link: "#" },
        { text: "Synthetic Motor Oil Replacement", link: "#" },
        { text: "Oil Filter Replacement", link: "#" },
        { text: "Brake Repair", link: "#" },
        { text: "Engine Diagnostic", link: "#" },
        { text: "Belts, Hoses, Fluids", link: "#" },
        { text: "Transmission Services", link: "#" },
    ];

    return (
        <div className="row">
            <div className="col-lg-6 col-xl-5">
                <div className="service_include">
                    <h3 className="title">Our Service Include</h3>
                    <p className="para">
                        Our CarSure experts inspect the car on over 200
                        checkpoints so you get complete satisfaction and peace
                        of mind before buying.
                    </p>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="si_list">
                                <ul className="mb0 order_list list-style-check-circle check_theme_color">
                                    {serviceItems
                                        .slice(0, 5)
                                        .map((item, index) => (
                                            <li key={index}>
                                                <a href={item.link}>
                                                    {item.text}
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                        {/* End .col */}

                        <div className="col-lg-5">
                            <div className="si_list">
                                <ul className="mb0 order_list list-style-check-circle check_theme_color">
                                    {serviceItems
                                        .slice(5, 10)
                                        .map((item, index) => (
                                            <li key={index}>
                                                <a href={item.link}>
                                                    {item.text}
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                        {/* End .col */}
                    </div>
                    {/* End .row */}
                </div>
                {/* End service_include */}
            </div>
            {/* End col-6 */}

            <div className="col-lg-6 col-xl-6 offset-xl-1">
                <div className="service_thumb">
                    <Image
                        width={636}
                        height={667}
                        layout="responsive"
                        src="/images/service/1.jpg"
                        alt="1.jpg"
                    />
                </div>
            </div>
            {/* End col-6 */}
        </div>
    );
};

export default ListWithImage;
