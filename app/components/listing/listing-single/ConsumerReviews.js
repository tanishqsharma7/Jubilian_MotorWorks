import Image from "next/image";

const ConsumerReviews = () => {
    const reviewData = [
        { label: "Comfort", rating: 4.7 },
        { label: "Interior design", rating: 4.9 },
        { label: "Performance", rating: 4.6 },
        { label: "Value for the money", rating: 5.0 },
        { label: "Exterior styling", rating: 4.3 },
        { label: "Reliability", rating: 4.0, extraClass: "bbn" },
    ];

    const reviews = [
        {
            name: "Jane Cooper",
            date: "April 6, 2021 at 3:21 AM",
            rating: 5,
            numReviews: 5,
            text: "Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul.",
        },
        {
            name: "John Smith",
            date: "May 1, 2021 at 10:45 AM",
            rating: 4,
            numReviews: 3,
            text: "Had a great time exploring the city with John. He took us to some hidden gems that we never would have found on our own. Only downside was that it was a bit rushed at times.",
        },
    ];

    return (
        <div className="user_profile_review mt30">
            <div className="energy_class">
                <h4 className="mb30 mt10">Consumer reviews</h4>
                {reviewData.map((review, index) => (
                    <div
                        className={`single_line ${review.extraClass}`}
                        key={`review-${index}`}
                    >
                        <p className="para">{review.label}</p>
                        <ul className="review">
                            <li className="list-inline-item">
                                <span className="total_rive_count">
                                    {review.rating}
                                </span>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
            {/* End userProfileReview */}

            <div className="product_single_content">
                <div className="mbp_pagination_comments">
                    {reviews.map((review, index) => (
                        <div className="mbp_first d-flex db-414" key={index}>
                            <div className="flex-shrink-0">
                                <Image
                                    width={70}
                                    height={70}
                                    src={`/images/blog/reviewer${
                                        index + 1
                                    }.png`}
                                    className="mr-3"
                                    alt={`reviewer${index + 1}.png`}
                                />
                            </div>
                            <div className="flex-grow-1 ms-4 ml0-414">
                                <h4 className="sub_title">{review.name}</h4>
                                <div className="sspd_postdate mb15">
                                    {review.date}
                                    <div className="sspd_review float-none float-sm-end">
                                        <ul className="mb0 pl15 pl0-sm">
                                            {Array.from(
                                                { length: review.rating },
                                                (_, i) => (
                                                    <li
                                                        className="list-inline-item"
                                                        key={i}
                                                    >
                                                        <a href="#">
                                                            <i className="fa fa-star" />
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                            {Array.from(
                                                { length: 5 - review.rating },
                                                (_, i) => (
                                                    <li
                                                        className="list-inline-item"
                                                        key={i + review.rating}
                                                    >
                                                        <a href="#">
                                                            <i className="fa fa-star-o" />
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                            <li className="list-inline-item">
                                                ({review.numReviews} reviews)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p>{review.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConsumerReviews;
