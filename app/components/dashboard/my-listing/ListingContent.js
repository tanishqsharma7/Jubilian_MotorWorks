import Image from "next/image";

const ListingContent = () => {
  const carListings = [
    {
      id: 1,
      make: "Volvo",
      model: "XC90",
      year: 2020,
      transmission: "Automatic",
      fuelType: "Diesel",
      price: "$129",
      imageSrc: "/images/listing/1.jpg",
    },
    {
      id: 2,
      make: "Audi",
      model: "A8 L 55",
      year: 2021,
      transmission: "Automatic",
      fuelType: "Diesel",
      price: "$129",
      imageSrc: "/images/listing/5.jpg",
    },
    {
      id: 3,
      make: "Bentley",
      model: "Bentayga V8",
      year: 2020,
      transmission: "Automatic",
      fuelType: "Diesel",
      price: "$129",
      imageSrc: "/images/listing/7.jpg",
    },
  ];

  return (
    <div className="col-lg-12">
      <div className="table-responsive my_lisging_table">
        <table className="table">
          <thead className="table-light">
            <tr className="thead_row">
              <th className="thead_title pl20" scope="col">
                Make
              </th>
              <th className="thead_title" scope="col">
                Model
              </th>
              <th className="thead_title" scope="col">
                Year
              </th>
              <th className="thead_title" scope="col">
                Transmission
              </th>
              <th className="thead_title" scope="col">
                FuelType
              </th>
              <th className="thead_title" scope="col">
                Action
              </th>
            </tr>
          </thead>
          {/* End thead */}

          <tbody>
            {carListings.map((car) => (
              <tr key={car.id}>
                <th className="align-middle pl20" scope="row">
                  <div className="car-listing bdr_none d-flex mb0">
                    <div className="thumb w150">
                      <Image
                        width={150}
                        height={96}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                        className="img-fluid"
                        src={car.imageSrc}
                        alt={car.make}
                      />
                    </div>
                    <div className="details ms-1">
                      <h6 className="title">
                        <a href="page-car-single-v1.html">{`${car.make} ${car.model} - ${car.year}`}</a>
                      </h6>
                      <h5 className="price">{car.price}</h5>
                    </div>
                  </div>
                </th>
                <td className="align-middle">{car.make}</td>
                <td className="align-middle">{car.year}</td>
                <td className="align-middle">{car.transmission}</td>
                <td className="align-middle">{car.fuelType}</td>
                <td className="editing_list align-middle">
                  <ul>
                    <li className="list-inline-item mb-1">
                      <a href="#" title="View">
                        <span className="flaticon-view"></span>
                      </a>
                    </li>
                    <li className="list-inline-item mb-1">
                      <a href="#" title="Edit">
                        <span className="flaticon-pen"></span>
                      </a>
                    </li>
                    <li className="list-inline-item mb-1">
                      <a href="#" title="Delete">
                        <span className="flaticon-trash"></span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListingContent;
