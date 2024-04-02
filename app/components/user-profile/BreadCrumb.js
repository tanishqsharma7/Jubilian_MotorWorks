const BreadCrumb = () => {
    return (
        <div className="breadcrumb_content style2">
            <ol className="breadcrumb float-start">
                <li className="breadcrumb-item">
                    <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Cars for Sale
                </li>
            </ol>
        </div>
    );
};

export default BreadCrumb;
