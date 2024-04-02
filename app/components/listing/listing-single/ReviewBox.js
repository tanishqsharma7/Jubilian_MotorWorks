const ReviewBox = () => {
    return (
        <div className="user_review_form">
            <div className="bsp_reveiw_wrt">
                <h4 className="mt10">Write a Review</h4>
                <form className="comments_form">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Name"
                                />
                            </div>
                        </div>
                        {/* End .col-md-6 */}

                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        {/* End .col-md-6 */}

                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    rows={9}
                                    placeholder="Message"
                                    defaultValue=""
                                />
                            </div>
                        </div>
                        {/* End .col-md-12 */}

                        <div className="col-md-12">
                            <button type="submit" className="btn btn-thm">
                                Send Your Review
                            </button>
                        </div>
                        {/* End .col-md-12 */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewBox;
