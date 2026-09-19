import { Link } from "react-router-dom";
import { projects } from "../data/projectsData.js";
import starLarge from '../assets/star-large.png';
import starSmall from '../assets/star-small.svg';
import starDot from '../assets/star-dot.png';
import TwinkleStar from './TwinkleStar';

export default function Projects() {
  return (
    <div className="relative p-2 flex flex-col gap-2">
        <TwinkleStar src={starLarge} className="absolute max-h-[30px] top-2 right-6 -z-10" />
        <TwinkleStar src={starSmall} className="absolute max-h-[14px] top-9 right-20 -z-10" />
        <TwinkleStar src={starDot} className="absolute max-h-[8px] top-1 right-16 -z-10" />
        <TwinkleStar src={starLarge} className="absolute max-h-[22px] top-16 left-4 -z-10" />
        <TwinkleStar src={starSmall} className="absolute max-h-[12px] top-1 left-14 -z-10" />
        <TwinkleStar src={starDot} className="absolute max-h-[6px] top-9 left-2 -z-10" />
        <TwinkleStar src={starDot} className="absolute max-h-[7px] top-14 right-2 -z-10" />
        {/* light stars behind the bottom of the list */}
        <TwinkleStar src={starLarge} className="absolute max-h-[26px] bottom-6 right-10 -z-10" />
        <TwinkleStar src={starSmall} className="absolute max-h-[14px] bottom-16 left-8 -z-10" />
        {/* dim background stars behind the bottom of the list */}
        <TwinkleStar src={starDot} className="absolute max-h-[6px] bottom-2 left-1/3 -z-10 opacity-50" />
        <TwinkleStar src={starDot} className="absolute max-h-[7px] bottom-10 right-1/4 -z-10 opacity-50" />
        <TwinkleStar src={starDot} className="absolute max-h-[5px] bottom-24 left-16 -z-10 opacity-50" />
        <TwinkleStar src={starSmall} className="absolute max-h-[10px] bottom-1 right-1/3 -z-10 opacity-50" />
        <Link to="/" className="text-subtitle2 text-gold mr-auto mt-2">
          ← Home
        </Link>
        <h2 className="text-h2 text-gold text-center">Things I'm Proud Of</h2>
      <div className="flex flex-col gap-2 mt-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="bg-med-green text-gold text-subtitle2 py-2 px-3 rounded-xl text-center
              transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_14px_2px_var(--color-glow)]"
          >
            {project.title}
          </Link>
        ))}
      </div>
    </div>
  );
}