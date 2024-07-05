import React, { useState } from 'react';
import './BatchImageConversion.css';

const BatchImageConversion: React.FC = () => {
    const [images, setImages] = useState<File[]>([]);
    const [conversionType, setConversionType] = useState<string>('jpg');
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        setImages((prevImages) => [...prevImages, ...files]);
    };

    const handleConversionTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setConversionType(event.target.value);
    };

    const handleRemoveImage = (index: number) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
        if (selectedImage !== null && (event.key === 'Delete' || event.key === 'Backspace')) {
            handleRemoveImage(selectedImage);
            setSelectedImage(null);
        }
    };

    return (
        <div className="batch-image-conversion">
            <ul
                className="image-list"
                onKeyDown={handleKeyDown}
                tabIndex={0} // Ensure the list can receive keyboard events
            >
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <li
                        key={index}
                        className={`image-list-item ${selectedImage === index ? 'selected' : ''}`}
                        onClick={() => setSelectedImage(index)}
                        onContextMenu={(e) => {
                            e.preventDefault();
                            handleRemoveImage(index);
                        }}
                        >
                        {image.name}
                        </li>
                    ))
                ) : (
                    <div className="image-placeholder">No images selected</div>
                )}
            </ul>
            <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
            <select value={conversionType} onChange={handleConversionTypeChange}>
                <option value="jpg">JPG</option>
                <option value="png">PNG</option>
                <option value="webp">WebP</option>
                <option value="heic">HEIC</option>
            </select>
            <button onClick={() => alert('Convert Images')}>Convert</button>
        </div>
    );
};

export default BatchImageConversion;
