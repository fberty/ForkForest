import React from 'react';
import ImageLightbox from './components/ImageLightbox';

const ForkForest02: React.FC = () => {
  const images = [
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-50-03.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-50-55.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-50-56.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-50-58.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-51-07.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-51-09.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-51-14.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-51-20.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-51-23.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-51-25.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-51-42.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-51-45.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-53-18.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-53-19.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-53-24.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-05.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-07.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-12.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-18.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-21.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-22.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-27.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-29.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-34.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-44.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-46.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-47.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-49.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-51.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-53.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-44-54.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-45-07.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-45-10.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-49-15.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-49-17.jpg",
    "/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-21_10-49-19.jpg"
  ];

  const alts = images.map((_, index) => `Los Cerrillos Project Photo ${index + 1}`);

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold mb-6 text-center">FORK FOREST 02: Los Cerrillos</h3>
      <div data-component-name="ForkForest02">
        <ImageLightbox images={images} alts={alts} />
      </div>
    </div>
  );
};

export default ForkForest02;
