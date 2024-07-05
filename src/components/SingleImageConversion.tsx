import React, { useState } from 'react';
import './SingleImageConversion.css';

const SingleImageConversion: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [imagePath, setImagePath] = useState<string>('');
  const [conversionType, setConversionType] = useState<string | undefined>(undefined);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
        // setImagePath(file.path);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFilePathChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const path = event.target.value;
    setImagePath(path);
    // Handle loading image from the path
  };

  const handleConversionTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setConversionType(event.target.value);
  };

  return (
    <div className="single-image-conversion">
      <div className="file-selection">
        {/* <h2 className='source'>Source:</h2> */}
        <label htmlFor="file-input" className="file-label">Select an Image: </label>
        <input
          type="text"
          className="file-path"
          value={imagePath}
          onChange={handleFilePathChange}
        />
        <input
          type="file"
          id="file-input"
          accept="image/*"
          onChange={handleImageUpload}
          className="file-input"
        />
      </div>
      <div className="image-preview-box">
        {image ? (
          <img src={image} alt="Preview" className="image-preview" />
        ) : (
          <div className="image-placeholder">No image selected</div>
        )}
      </div>
      <div className='output'>
        <label htmlFor="output-path" className="output-label">Rename: </label>
        <input
          type="text"
          className="output-name"
          // value={imagePath}
          // onChange={handleFilePathChange}
        />
      </div>
      <div className="conversion-controls">
        Conversion type:
          <select value={conversionType} onChange={handleConversionTypeChange}>
            <option value='Format' selected disabled>Choose type</option>
            <option value="jpg">JPG</option>
            <option value="png">PNG</option>
            <option value="webp">WebP</option>
            <option value="heic">HEIC</option>
          </select>
          
        </div>
      <button onClick={() => alert('Convert Image')}>Convert</button>
    </div>
  );
};

export default SingleImageConversion;
