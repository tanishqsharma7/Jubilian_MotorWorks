const Pagination = () => {
  const pages = [
    {
      label: "Previous Post",
      text: "Given Set was without from god divide rule Hath",
      className: "pag_prev",
      iconClassName: "fa fa-angle-left mr5",
    },
    {
      label: "Next Post",
      text: "Tree earth fowl given moveth deep lesser After",
      className: "pag_next text-end",
      iconClassName: "fa fa-angle-right ml5",
    },
  ];

  return (
    <div className="mbp_pagination_tab">
      <div className="row">
        {pages.map((page, index) => (
          <div className="col-sm-6 col-lg-6" key={index}>
            <div className={page.className}>
              <div className="detls">
                <h5>
                  <span className={page.iconClassName} /> {page.label}
                </h5>
                <p>{page.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
