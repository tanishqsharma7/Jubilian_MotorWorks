import Image from "next/image";
import React from "react";

const Comments = () => {
  const commentsData = [
    {
      id: 1,
      reviewer: "Bessie Cooper",
      imageSrc: "/images/blog/reviewer1.png",
      date: "April 6, 2021 at 3:21 AM",
      rating: 5,
      review:
        "Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul.",
    },
    {
      id: 2,
      reviewer: "Savannah Nguyen",
      imageSrc: "/images/blog/reviewer2.png",
      date: "April 6, 2021 at 3:21 AM",
      rating: 5,
      review:
        "Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul.",
    },
    {
      id: 3,
      reviewer: "Albert Flores",
      imageSrc: "/images/blog/reviewer3.png",
      date: "April 6, 2021 at 3:21 AM",
      rating: 5,
      review:
        "Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul.",
    },
  ];

  return (
    <>
      {commentsData.map((comment) => (
        <div className="single-comment" key={comment.id}>
          <div className="mbp_first d-flex align-items-center">
            <div className="flex-shrink-0">
              <Image
                width={70}
                height={70}
                src={comment.imageSrc}
                className="mr-3"
                alt={`reviewer${comment.id}.png`}
              />
            </div>
            <div className="flex-grow-1 ms-4">
              <h4 className="sub_title mt20">{comment.reviewer}</h4>
              <div className="sspd_postdate mb15">
                {comment.date}
                <div className="sspd_review float-end">
                  <ul className="mb0 pl15">
                    {[...Array(comment.rating)].map((_, index) => (
                      <li className="list-inline-item" key={index}>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                      </li>
                    ))}
                    <li className="list-inline-item">
                      ({comment.rating} reviews)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className="mt15 mb30">{comment.review}</p>
          {comment.id !== commentsData.length && <hr />}
          {/* Add <br> if not the last item */}
        </div>
      ))}
    </>
  );
};

export default Comments;
