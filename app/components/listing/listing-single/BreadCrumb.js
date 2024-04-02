const BreadCrumb = () => {
  return (
    <ol className="breadcrumb float-start">
      <li className="breadcrumb-item">
        <a href="#">Home</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Cars for Sale
      </li>
    </ol>
  );
};

export default BreadCrumb;
