import React from 'react';
import ImageLightbox from './components/ImageLightbox';

const ForkForest03: React.FC = () => {
  const images = [
    "/FORK FOREST 03: Muralla viva II/Territorio/photo_2025-03-21_10-42-12.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/photo_2025-03-21_13-43-21.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/photo_2025-03-21_13-43-15.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/photo_2025-03-21_13-43-08.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/photo_2025-03-21_13-43-13.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/photo_2025-03-21_13-43-18.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/-5091760760102693716_121.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-07993.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-07997.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08012.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08017.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08018.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08021.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08024.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08028.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08031.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08042.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08047.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08049.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08053.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08056.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08057.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08060.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08072.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08080.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08084.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08089.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08097.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08108.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/Muralla Viva-08110.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/photo_2025-03-21_10-42-23.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/photo_2025-03-21_10-42-30.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/photo_2025-03-21_10-42-31.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/photo_2025-03-21_10-42-34.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/photo_2025-03-21_10-42-35.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/photo_2025-03-21_10-43-18.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/photo_2025-03-21_10-43-19.jpg",
    "/FORK FOREST 03: Muralla viva II/Territorio/photo_2025-03-21_10-43-21.jpg"
  ];

  const alts = images.map((_, index) => `Muralla viva II ${index + 1}`);

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold mb-6 text-center">FORK FOREST 03: Muralla viva II</h3>
      <div data-component-name="ForkForest03">
        <ImageLightbox images={images} alts={alts} />
      </div>
    </div>
  );
};

export default ForkForest03;
