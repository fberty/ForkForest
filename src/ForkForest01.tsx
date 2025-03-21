import React from 'react';
import ImageLightbox from './components/ImageLightbox';

const ForkForest01: React.FC = () => {
  const images = [
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-29-52.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-31-59.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-35-00.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-35-03.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-33-47.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-33-30.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-33-45.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-33-51.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-33-41.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-35-17.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-35-24.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-01.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-03.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-08.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-10.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-17_21-52-47.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-17_21-52-49.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-17_21-52-54.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-17_21-53-09.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-33-35.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-35-06.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-35-11.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-35-14.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-00.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-11.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-33.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-34.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-43.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-59.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-38-16.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-38.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-46.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-56.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-51.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-28.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-34-55.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-48.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-34-21.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-34-57.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-42.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-38-20.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-34-35.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-24.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-38-14.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-34-39.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-36.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-29.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-46-33.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-34-18.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-46-35.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-46-42.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-46-26.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-46-14.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-46-43.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-46-30.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-46-39.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-46-20.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-38-19.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-46-45.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-36-53.jpg",
    "/FORK FOREST 01: Urkku/Territorio/photo_2025-03-21_10-37-58.jpg"
  ];

  const alts = images.map((_, index) => `Urkku Project Photo ${index + 1}`);

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold mb-6 text-center">FORK FOREST 01: Urkku</h3>
      <div data-component-name="ForkForest01">
        <ImageLightbox images={images} alts={alts} />
      </div>
    </div>
  );
};

export default ForkForest01;
