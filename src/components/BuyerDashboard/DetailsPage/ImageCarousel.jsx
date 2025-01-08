import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ImageCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const showNextImage = useCallback(() => {
    setCurrentImageIndex((index) => (index + 1) % images.length);
  }, [images.length]);

  const showPreviousImage = useCallback(() => {
    setCurrentImageIndex((index) => (index - 1 + images.length) % images.length);
  }, [images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isDialogOpen) return;

    function handleKeyDown(event) {
      if (event.key === 'ArrowLeft') {
        showPreviousImage();
      } else if (event.key === 'ArrowRight') {
        showNextImage();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDialogOpen, showPreviousImage, showNextImage]);

  return (
    <div className="relative w-full">
      <div
        className="w-full overflow-hidden rounded-lg cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <img
          src={images[currentImageIndex]}
          alt="Property"
          className="h-[400px] w-full object-cover transition-transform hover:scale-105"
        />
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0  flex items-center justify-center bg-black/80">
          <div className="relative aspect-video w-full max-w-5xl">
            <img
              src={images[currentImageIndex]}
              alt="Property"
              className=" rounded-xl  w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={showPreviousImage}
                className="p-2 rounded-full bg-white/80 backdrop-blur-sm"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={showNextImage}
                className="p-2 rounded-full bg-white/80 backdrop-blur-sm"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
          <button
            onClick={() => setIsDialogOpen(false)}
            className="absolute top-4 right-4 p-2 text-white"
          >
            Close
          </button>
        </div>
      )}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 w-2 rounded-full bg-white/50 transition-all ${
              currentImageIndex === index ? 'bg-white' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
