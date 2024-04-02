const ShareMeta = () => {
  const shareOptions = [
    {
      iconClassName: "flaticon-email",
      label: "EMAIL",
    },
    {
      iconClassName: "flaticon-printer",
      label: "PRINT",
    },
    {
      iconClassName: "flaticon-heart",
      label: "SAVE",
    },
    {
      iconClassName: "flaticon-share",
      label: "SHARE",
    },
  ];

  return (
    <ul>
      {shareOptions.map((option, index) => (
        <li className="list-inline-item" key={index}>
          <a href="#">
            <span className={option.iconClassName} />
            {option.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ShareMeta;
