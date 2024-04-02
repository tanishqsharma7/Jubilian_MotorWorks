const CommentForm = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        stars.push(
            <li key={i} className="list-inline-item">
                <a href="#">
                    <i className="fa fa-star" />
                </a>
            </li>
        );
    }

    return (
        <form className="comments_form">
            <div className="row">
                <div className="col-lg-12">
                    <h4 className="title mb30">Write a review</h4>
                    <div className="sspd_review mb30">
                        <ul className="mb0">{stars}</ul>
                    </div>
                </div>
                {/* End .col-12 */}

                <div className="col-md-6">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                </div>
                {/* End .col-6 */}

                <div className="col-md-6">
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            required
                        />
                    </div>
                </div>
                {/* End .col-6 */}

                <div className="col-md-12">
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            rows={6}
                            placeholder="Message"
                            defaultValue=""
                            required
                        />
                    </div>
                </div>
                {/* End .col-12 */}

                <div className="col-md-12">
                    <button type="submit" className="btn btn-thm">
                        Send Your Review
                    </button>
                </div>
                {/* End .col-12 */}
            </div>
        </form>
    );
};

export default CommentForm;
