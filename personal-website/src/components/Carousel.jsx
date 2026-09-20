import { useRef, useState } from "react";

// A swipeable, one-image-at-a-time carousel with gold dot indicators.
// Drag/swipe or click a dot to change slides.
export default function Carousel({ images, imageClassName = "", className = "mt-3" }) {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(null);
  const trackWidth = useRef(0);
  const trackRef = useRef(null);

  if (!images?.length) return null;

  const goTo = (i) => setIndex(Math.max(0, Math.min(images.length - 1, i)));

  const handlePointerDown = (e) => {
    dragStartX.current = e.clientX;
    trackWidth.current = trackRef.current?.offsetWidth || 1;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (dragStartX.current === null) return;
    setDragOffset(e.clientX - dragStartX.current);
  };

  const endDrag = () => {
    if (dragStartX.current === null) return;
    const threshold = trackWidth.current * 0.15;
    if (dragOffset < -threshold) goTo(index + 1);
    else if (dragOffset > threshold) goTo(index - 1);
    dragStartX.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  return (
    <div className={className}>
      <div
        className="relative overflow-hidden touch-pan-y select-none cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <div
          ref={trackRef}
          className={`flex ${isDragging ? "" : "transition-transform duration-300 ease-out"}`}
          style={{ transform: `translateX(calc(${-index * 100}% + ${dragOffset}px))` }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full shrink-0 flex justify-center">
              <img
                src={img.src}
                alt={img.alt}
                draggable={false}
                className={`rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.45)] ${imageClassName}`}
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex flex-row justify-center gap-2 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to image ${i + 1} of ${images.length}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 bg-gold cursor-pointer ${
                i === index ? "w-5 opacity-100" : "w-2 opacity-40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
