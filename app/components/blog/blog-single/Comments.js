import Image from "next/image";

const commentsData = [
  {
    id: 1,
    image: "/images/blog/reviewer1.png",
    name: "Jane Cooper",
    date: "April 6, 2021 at 3:21 AM",
    reviewCount: 5,
    comment:
      "Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul.",
    rating: [],
  },
  {
    id: 2,
    image: "/images/blog/reviewer2.png",
    name: "John Doe",
    date: "May 10, 2023 at 10:00 AM",
    reviewCount: 5,
    comment:
      "Had a great time exploring Istanbul with John. He took us to some hidden gems we would have never found on our own. The only downside was that he was sometimes hard to hear over the noise of the city.",
    rating: [],
  },
];

// loop through commentsData and add rating object array to each comment
commentsData.forEach((comment) => {
  const rating = [];
  for (let i = 0; i < 5; i++) {
    if (i < comment.reviewCount) {
      rating.push({
        id: i + 1,
        icon: "fa fa-star",
      });
    } else {
      rating.push({
        id: i + 1,
        icon: "fa fa-star-o",
      });
    }
  }
  comment.rating = rating;
});

const Comments = () => {
  return (
    <>
      {commentsData.map((comment) => (
        <div key={comment.id} className="mbp_first d-flex">
          <div className="flex-shrink-0">
            <Image
              width={70}
              height={70}
              src={comment.image}
              className="mr-3"
              alt="reviewer"
            />
          </div>
          <div className="flex-grow-1 ms-4">
            <h4 className="sub_title">{comment.name}</h4>
            <div className="sspd_postdate mb15">
              {comment.date}
              <div className="sspd_review float-none float-sm-end">
                <ul className="mb0 pl15 pl0-sm">
                  {comment.rating.map((star) => (
                    <li key={star.id} className="list-inline-item">
                      <a href="#">
                        <i className={star.icon}></i>
                      </a>
                    </li>
                  ))}
                  <li className="list-inline-item">
                    ({comment.reviewCount} reviews)
                  </li>
                </ul>
              </div>
            </div>
            <p>{comment.comment}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comments;
