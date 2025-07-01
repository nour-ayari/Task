import { useState, useEffect } from "react";

export const Carousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 5;
  const peekWidth = 10; 
  const imgWidth = 200;
  const imgHeight = 290;
  const gap = 16;

  const totalVisibleWidth = visibleCount * imgWidth + (visibleCount - 1) * gap;
  const containerWidth = totalVisibleWidth + 2*peekWidth ;

  const length = images.length;

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const prev = () => {
    setCurrentIndex(prev => (prev <= 0 ? length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex(prev => (prev >= length - 1 ? 0 : prev + 1));
  };

  if (length === 0) return <div className="text-center">No images available</div>;

  return (
    <div className="flex items-center justify-center gap-6">
     
     <button
  onClick={prev}
  disabled={currentIndex === 0}
  className={`p-4 z-10 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-gray-700 text-black'}`}
>
  &#10094;
</button>

     
      <div
        className="relative overflow-hidden"
        style={{ width: containerWidth }}
      >
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(${-currentIndex * (imgWidth + gap) + peekWidth}px)`,
            gap: gap,
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 "
              style={{ width: imgWidth }}
            >
              <img
                src={src}
                alt={`Slide ${i}`}
              className="rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-110"


                style={{ width: imgWidth, height: imgHeight }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

     <button
  onClick={next}
  disabled={currentIndex >= length - visibleCount}
  className={`p-4 z-10 ${currentIndex >= length - visibleCount ? 'opacity-30 ' : 'hover:text-gray-700 text-black'}`}
>
  &#10095;
</button>
    </div>
  );
};
