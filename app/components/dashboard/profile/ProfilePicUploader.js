"use client";

import React, { useState } from "react";

const ProfilePicUploader = () => {
  const defaultImage = "/images/team/upload_photo.png";
  const [selectedImage, setSelectedImage] = useState(defaultImage);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      setSelectedImage(defaultImage);
    }
  };

  return (
    <div className="wrap-custom-file mb25">
      <input
        type="file"
        name="image1"
        id="image1"
        accept=".gif, .jpg, .jpeg, .png"
        onChange={handleImageChange}
      />
      <label
        htmlFor="image1"
        style={{
          backgroundImage: `url("${selectedImage}")`,
        }}
      >
        <span>&nbsp;&nbsp;Browse</span>
      </label>
      <small className="file_title">
        Max file size is 1MB. Minimum dimension: 330x300. Suitable files are
        .jpg, .jpeg, and .png.
      </small>
    </div>
  );
};

export default ProfilePicUploader;
