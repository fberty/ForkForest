import React from 'react';

const ForkForest03: React.FC = () => {
  const images = [
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-21_10-42-12.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-21_13-43-21.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-21_13-43-15.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-21_13-43-08.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-21_13-43-13.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-21_13-43-18.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/-5091760760102693716_121.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-07993.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-07997.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08017.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08018.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08021.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08024.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08028.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08031.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08042.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08047.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08049.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08053.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08056.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08057.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08060.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08072.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08080.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08084.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08089.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08097.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08108.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/Muralla%20Viva-08110.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-21_10-42-23.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-21_10-42-30.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-21_10-42-31.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-21_10-42-34.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-21_10-42-35.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-21_10-43-18.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-21_10-43-19.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-21_10-43-21.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-17_21-50-03.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-17_21-50-58.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-17_21-51-07.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-17_21-51-09.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-17_21-51-13.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-17_21-51-14.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-17_21-51-20.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-17_21-51-23.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-17_21-51-25.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-17_21-52-52.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-17_21-53-19.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-17_21-53-24.jpg",
    "/FORK%20FOREST%2003:%20Muralla%20viva%20II/Territorio/photo_2025-03-21_13-43-16.jpg"
  ];

  const alts = images.map((_, index) => `Muralla viva II ${index + 1}`);

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold mb-6 text-center">FORK FOREST 03: Muralla viva II</h3>
      <div data-component-name="ForkForest03">
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

export default ForkForest03;
