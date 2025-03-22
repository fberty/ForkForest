import React from 'react';

const ForkForest01: React.FC = () => {
  const images = [
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-29-52.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-31-59.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-35-00.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-35-03.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-33-47.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-33-30.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-33-45.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-33-51.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-33-41.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-35-17.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-35-24.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-01.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-03.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-08.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-10.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-17_21-52-47.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-17_21-52-49.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-17_21-52-54.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-17_21-53-09.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-33-35.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-35-06.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-35-11.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-35-14.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-00.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-11.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-33.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-34.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-43.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-59.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-38-16.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-38.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-46.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-56.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-51.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-28.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-34-55.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-48.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-34-21.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-34-57.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-42.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-38-20.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-34-35.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-24.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-38-14.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-34-39.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-36.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-29.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-46-33.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-34-18.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-46-35.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-46-39.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-46-20.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-38-19.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-46-45.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-36-53.jpg",
    "/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2025-03-21_10-37-58.jpg"
  ];

  const alts = images.map((_, index) => `Urkku Project Photo ${index + 1}`);

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold mb-6 text-center">FORK FOREST 01: Urkku</h3>
      <div data-component-name="ForkForest01">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={image}>
              <img 
                src={image} 
                alt={alts[index]} 
                className="w-full h-64 object-cover rounded-lg" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForkForest01;
