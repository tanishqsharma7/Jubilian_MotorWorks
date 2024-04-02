"use client";
import { useState } from "react";
import Image from "next/image";

const Gallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const validImageTypes = ["image/png", "image/jpeg"]; // Valid image MIME types
    const selectedValidImages = files.filter((file) =>
      validImageTypes.includes(file.type)
    );
    const images = selectedValidImages.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...images]);
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <>
      <ul className="mb0 mt10">
        {selectedImages.map((image, index) => (
          <li className="list-inline-item" key={index}>
            <div className="portfolio_item">
              <Image
                width={170}
                height={150}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="img-fluid"
                src={image}
                alt={`image-${index}`}
              />
              <div
                className="edu_stats_list"
                onClick={() => handleRemoveImage(index)}
              >
                <span>X</span>
              </div>
            </div>
          </li>
        ))}
        {/* End uploaded images */}
        <li className="list-inline-item vat">
          <div className="upload_file_input_add_remove style-right mb30">
            <span className="btn_upload">
              <input
                type="file"
                className="input-img"
                placeholder="UPLOAD FILES"
                multiple
                accept=".png, .jpg, .jpeg" // Specify accepted file types
                onChange={handleImageChange}
              />
              <span>UPLOAD FILES</span>
            </span>
          </div>
        </li>
        {/* End upload button */}
      </ul>
    </>
  );
};

export default Gallery;
