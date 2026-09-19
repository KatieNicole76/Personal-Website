import useTwinkleTiming from '../hooks/useTwinkleTiming';

// A decorative star/dot image with its own randomized twinkle timing so
// repeated instances never blink in sync with each other.
export default function TwinkleStar({ src, className = '', style = {} }) {
  const timing = useTwinkleTiming();
  return (
    <img
      src={src}
      alt=""
      className={`motion-safe:animate-twinkle ${className}`}
      style={{ ...timing, ...style }}
    />
  );
}
