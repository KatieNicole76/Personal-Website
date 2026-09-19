import { useState } from 'react';

// Random per-mount animation timing so repeated twinkling stars never fall
// into visual lockstep with each other.
export default function useTwinkleTiming() {
  const [timing] = useState(() => ({
    animationDelay: `-${(Math.random() * 3.6).toFixed(2)}s`,
    animationDuration: `${(3.2 + Math.random() * 1.4).toFixed(2)}s`,
  }));
  return timing;
}
