import React, { useState } from "react";
import robe from '../images/robe.jpg'
import photo from '../images/telech.png'
import "./ImageUpload.css";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(photo);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="image-upload">
     {selectedImage && (
        <div className="image-preview">
          <img src={selectedImage } alt="Preview" className="preview-image" />
        </div>
      )}
      <label htmlFor="upload" className="upload-label">
        Choose an image
      </label>
      <input
      name="image"
        type="file"
        id="upload"
        accept="image/*"
        onChange={handleImageUpload}
      />
     
    </div>
  );
}

export default ImageUpload;