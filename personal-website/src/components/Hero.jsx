import profilePhoto from '../assets/profile-photo.png';
import moon from '../assets/moon.svg';
import starLarge from '../assets/star-large.png';
import starSmall from '../assets/star-small.svg';
import starDot from '../assets/star-dot.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import email from '../assets/email.png';
import Bio from './Bio';
import TwinkleStar from './TwinkleStar';


function IntroText() {
  return (
    <div className="flex flex-col leading-none md:justify-right">
      <h1 className="text-h1 text-gold">Hi, I'm<br />Katie</h1>
      <p className="text-h3 text-gold mt-1">Software Engineer</p>
      <div className='flex flex-row gap-2 mt-2 flex-wrap items-center'>
      <a href="https://linkedin.com/in/katiekaiser17" aria-label="LinkedIn">
          <img src={linkedin} alt="" className="max-h-[18px] md:max-h-[24px] transition-all duration-300 hover:[filter:drop-shadow(0_0_6px_var(--color-glow))]" />
      </a>
      <a href="https://github.com/KatieNicole76" aria-label="Github">
          <img src={github} alt="" className="max-h-[19px] md:max-h-[27px] transition-all duration-300 hover:[filter:drop-shadow(0_0_6px_var(--color-glow))]" />
      </a>
      <a href="mailto:katienicole404@gmail.com" aria-label="Email">
          <img src={email} alt="" className="max-h-[21px] md:max-h-[30px] transition-all duration-300 hover:[filter:drop-shadow(0_0_6px_var(--color-glow))]" />
      </a>
      </div>
    </div>
  );
}

// Positions (as % of the 606x806 photo canvas) measured directly from the
// original composite artwork, split into individual pieces so each one can
// twinkle on its own timing instead of the whole cluster blinking as one.
const starPieces = [
  // top-right cluster
  { src: starLarge, left: 68.98, top: 0, width: 12.05 },
  { src: starSmall, left: 81.52, top: 10.92, width: 5.28 },
  { src: starDot, left: 85.64, top: 5.09, width: 1.16 },
  // left-middle cluster
  { src: starLarge, left: 13.86, top: 20.35, width: 8.91 },
  { src: starDot, left: 23.76, top: 20.10, width: 1.32 },
  // bottom-right cluster
  { src: starLarge, left: 75.58, top: 80.40, width: 14.19 },
  { src: starSmall, left: 89.11, top: 75.19, width: 6.44 },
  { src: starSmall, left: 91.09, top: 93.30, width: 6.44 },
  { src: starDot, left: 86.47, top: 93.30, width: 1.49 },
  { src: starDot, left: 97.36, top: 74.19, width: 1.49 },
];

// Tiny, dim, far-off stars scattered into the empty margins of the canvas —
// sit behind everything else to read as background depth, not decoration.
const backgroundStars = [
  { src: starDot, left: 4, top: 3, width: 1.0 },
  { src: starDot, left: 9, top: 10, width: 0.7 },
  { src: starSmall, left: 2, top: 40, width: 1.8 },
  { src: starDot, left: 10, top: 48, width: 0.8 },
  { src: starDot, left: 5, top: 88, width: 1.1 },
  { src: starDot, left: 15, top: 92, width: 0.7 },
  { src: starSmall, left: 40, top: 1, width: 1.6 },
  { src: starDot, left: 55, top: 3, width: 0.8 },
  { src: starDot, left: 3, top: 65, width: 0.9 },
  // fill the blank strip above the photo, below the site header
  { src: starDot, left: 47, top: 5, width: 0.7 },
  { src: starSmall, left: 61, top: 0, width: 1.3 },
  { src: starDot, left: 36, top: 8, width: 0.6 },
  { src: starDot, left: 51, top: 2, width: 0.8 },
];

// Dim stars scattered behind the "Hi, I'm Katie" heading itself — positioned
// with fixed offsets (not %) since this sits in the text column, not the
// photo canvas.
const headingStars = [
  { src: starDot, top: '4px', left: '150px', width: '7px' },
  { src: starDot, top: '30px', left: '260px', width: '5px' },
  { src: starSmall, top: '80px', left: '10px', width: '14px' },
  { src: starDot, top: '110px', left: '200px', width: '6px' },
  { src: starDot, top: '150px', left: '80px', width: '5px' },
  { src: starDot, top: '60px', left: '320px', width: '6px' },
];

export default function Hero() {
  return (
    <>
      <div className="relative flex flex-col mt-1 ml-1
          md:static md:flex-row md:itlems-start md:ml-5 md:mr-1 md:justify-center">
        <div className="absolute top-0 mt-1 md:static md:flex md:flex-col md:w-[45%]">
          {headingStars.map((piece, i) => (
            <TwinkleStar
              key={i}
              src={piece.src}
              className="absolute h-auto -z-10 opacity-50"
              style={{ left: piece.left, top: piece.top, width: piece.width }}
            />
          ))}
          <IntroText />
          <Bio edge="all" className="hidden mt-4 md:flex" />
        </div>
        <div className="relative w-[clamp(180px,55vw,550px)] aspect-[606/806] ml-auto mt-2
             md:ml-2 md:mr-2 md:w-[clamp(220px,70vw,550px)]">
          {backgroundStars.map((piece, i) => (
            <TwinkleStar
              key={i}
              src={piece.src}
              className="absolute h-auto -z-10 opacity-50"
              style={{ left: `${piece.left}%`, top: `${piece.top}%`, width: `${piece.width}%` }}
            />
          ))}
          <img
            src={profilePhoto}
            alt="Profile Picture"
            className="absolute left-[19.14%] top-[7.69%] w-[80.86%] h-[76.18%] [filter:brightness(0.85)_drop-shadow(0_0_14px_var(--color-darkest-green))]"
          />
          <img
            src={moon}
            alt=""
            className="absolute left-[3.63%] top-[61.04%] w-[31.02%] h-[23.57%] glow-constant motion-safe:animate-moon-glow"
          />
          {starPieces.map((piece, i) => (
            <TwinkleStar
              key={i}
              src={piece.src}
              className="absolute h-auto"
              style={{ left: `${piece.left}%`, top: `${piece.top}%`, width: `${piece.width}%` }}
            />
          ))}
        </div>
      </div>
      <Bio edge="y" className="md:hidden mt-2" />
    </>
  );
}
