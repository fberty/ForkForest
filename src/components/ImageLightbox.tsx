import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ImageLightboxProps {
  images: string[];
  alts: string[];
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ images, alts }) => {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const slides = images.map((src) => ({ src }));

  const openLightbox = (index: number) => {
    setImageIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={image} 
            className="cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image} 
              alt={alts[index] || `Image ${index + 1}`} 
              className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity" 
            />
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={imageIndex}
      />
    </>
  );
};

export default ImageLightbox;
