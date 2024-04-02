import Image from "next/image";

const ServiceBlock = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-6 col-xl-5">
                    <div className="service_thumb mb30-sm">
                        <Image
                            width={526}
                            height={354}
                            priority
                            layout="responsive"
                            src="/images/service/2.jpg"
                            alt="2.jpg"
                        />
                    </div>
                </div>
                <div className="col-md-6 col-xl-5 offset-xl-1">
                    <div className="service_include2 mt0-md">
                        <h3 className="title">Oil Changes</h3>
                        <p className="para">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis Theme natoque penatibus et magnis
                            dis parturient montes, nascetur.
                        </p>
                        <p>
                            Vel illum dolore eu feugiat nulla facilisis at vero
                            eros et accu qui blandit praesent luptatum zzril
                            delenit.
                        </p>
                    </div>
                </div>
            </div>
            {/* End .row */}

            <div className="row mt120 mt50-sm">
                <div className="col-md-6 col-xl-5">
                    <div className="service_include2 mt0-md mb30-sm">
                        <h3 className="title">Air Aonditioning</h3>
                        <p className="para">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis Theme natoque penatibus et magnis
                            dis parturient montes, nascetur.
                        </p>
                        <p>
                            Vel illum dolore eu feugiat nulla facilisis at vero
                            eros et accu qui blandit praesent luptatum zzril
                            delenit.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-xl-5 offset-xl-1">
                    <div className="service_thumb">
                        <Image
                            width={526}
                            height={354}
                            priority
                            layout="responsive"
                            src="/images/service/3.jpg"
                            alt="3.jpg"
                        />
                    </div>
                </div>
            </div>
            {/* End .row */}

            <div className="row mt120 mt50-sm">
                <div className="col-md-6 col-xl-5">
                    <div className="service_thumb mb30-sm">
                        <Image
                            width={526}
                            height={354}
                            priority
                            layout="responsive"
                            src="/images/service/3.jpg"
                            alt="3.jpg"
                        />
                    </div>
                </div>
                <div className="col-md-6 col-xl-5 offset-xl-1">
                    <div className="service_include2 mt0-md">
                        <h3 className="title">Auto Electric</h3>
                        <p className="para">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis Theme natoque penatibus et magnis
                            dis parturient montes, nascetur.
                        </p>
                        <p>
                            Vel illum dolore eu feugiat nulla facilisis at vero
                            eros et accu qui blandit praesent luptatum zzril
                            delenit.
                        </p>
                    </div>
                </div>
            </div>
            {/* End .row */}

            <div className="row mt120 mt50-sm">
                <div className="col-md-6 col-xl-5">
                    <div className="service_include2 mt0-md mb30-sm">
                        <h3 className="title">Brake Services</h3>
                        <p className="para">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis Theme natoque penatibus et magnis
                            dis parturient montes, nascetur.
                        </p>
                        <p>
                            Vel illum dolore eu feugiat nulla facilisis at vero
                            eros et accu qui blandit praesent luptatum zzril
                            delenit.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-xl-5 offset-xl-1">
                    <div className="service_thumb">
                        <Image
                            width={526}
                            height={354}
                            priority
                            layout="responsive"
                            src="/images/service/5.jpg"
                            alt="5.jpg"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceBlock;
