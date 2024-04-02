const Requirements = () => {
  const requirements = [
    {
      text: "We do not require any previous experience or pre-defined skills to take this course. A great orientation would be enough to master UI/UX design.",
      link: "#",
    },
    {
      text: "A computer with a good internet connection.",
      link: "#",
    },
    {
      text: "Adobe Photoshop (OPTIONAL).",
      link: "#",
    },
  ];

  return (
    <ul className="list-style-type-bullet">
      {requirements.map((requirement, index) => (
        <li key={index}>
          <a href={requirement.link}>{requirement.text}</a>
        </li>
      ))}
    </ul>
  );
};

export default Requirements;
