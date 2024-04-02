const FaqQuestion = () => {
  const faqItems = [
    {
      question: "How do I use this theme?",
      answer:
        "Mauris nulla lorem, interdum varius orci vitae, bibendum sagittis tellus. Nulla elementum dolor dui, vel condimentum erat vestibulum molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet risus lacus. Suspendisse pellentesque tempus enim ac hendrerit. Morbi cursus sapien eu nisl viverra mattis. Integer vestibulum enim dolor, sit amet maximus urna imperdiet ut.",
    },
    {
      question: "Are You looking for a new car?",
      answer:
        "Mauris nulla lorem, interdum varius orci vitae, bibendum sagittis tellus. Nulla elementum dolor dui, vel condimentum erat vestibulum molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet risus lacus. Suspendisse pellentesque tempus enim ac hendrerit. Morbi cursus sapien eu nisl viverra mattis. Integer vestibulum enim dolor, sit amet maximus urna imperdiet ut.",
    },
    {
      question: "Maintain your car to stay safe on the road",
      answer:
        "Mauris nulla lorem, interdum varius orci vitae, bibendum sagittis tellus. Nulla elementum dolor dui, vel condimentum erat vestibulum molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet risus lacus. Suspendisse pellentesque tempus enim ac hendrerit. Morbi cursus sapien eu nisl viverra mattis. Integer vestibulum enim dolor, sit amet maximus urna imperdiet ut.",
    },
    {
      question: "We know how to handle a wide range of car services.",
      answer:
        "Mauris nulla lorem, interdum varius orci vitae, bibendum sagittis tellus. Nulla elementum dolor dui, vel condimentum erat vestibulum molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet risus lacus. Suspendisse pellentesque tempus enim ac hendrerit. Morbi cursus sapien eu nisl viverra mattis. Integer vestibulum enim dolor, sit amet maximus urna imperdiet ut.",
    },
  ];

  return (
    <div className="accordion" id="accordionExample">
      {faqItems.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-header" id={`heading${index}`}>
            <h4 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse${index}`}
              >
                {item.question}
              </button>
            </h4>
          </div>
          <div
            id={`collapse${index}`}
            className={`collapse ${index === 0 ? "show" : ""}`}
            aria-labelledby={`heading${index}`}
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <p className="mb30">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqQuestion;
