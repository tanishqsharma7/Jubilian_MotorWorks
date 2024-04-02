const ContactSeller = () => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-12">
                    <div className="mb-3">
                        <input
                            className="form-control form_control"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                </div>
                {/* End .col-12 */}

                <div className="col-lg-12">
                    <div className="mb-3">
                        <input
                            className="form-control form_control"
                            type="text"
                            placeholder="Phone"
                        />
                    </div>
                </div>
                {/* End .col-12 */}

                <div className="col-lg-12">
                    <div className="mb-3">
                        <input
                            className="form-control form_control"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                </div>
                {/* End .col-12 */}

                <div className="col-md-12">
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            rows={6}
                            defaultValue="I am interested in a price quote on this vehicle. Please contact me at your earliest convenience with your best price for this vehicle."
                        />
                    </div>
                </div>
                {/* End .col-12 */}

                <div className="col-md-12">
                    <button
                        type="submit"
                        className="btn btn-block btn-thm mt10 mb20"
                    >
                        Send Message
                    </button>
                    <button
                        type="submit"
                        className="btn btn-block btn-whatsapp mb0"
                    >
                        <span className="flaticon-whatsapp mr10 text-white" />
                        WhatsApp
                    </button>
                </div>
                {/* End .col-12 */}
            </div>
            {/* End .row */}
        </form>
    );
};

export default ContactSeller;
