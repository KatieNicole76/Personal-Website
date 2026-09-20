import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projectsData";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import starLarge from '../assets/star-large.png';
import starSmall from '../assets/star-small.svg';
import starDot from '../assets/star-dot.png';
import TwinkleStar from './TwinkleStar';

function TechStack({ techStack }) {
  if (!techStack?.length) return null;
  return (
    <div className="flex flex-row flex-wrap gap-1 mt-2">
      {techStack.map((tech) => (
        <span
          key={tech}
          className="bg-darkest-green text-gold-muted text-subtitle3 py-1 px-2 rounded-xl mt-2">
          {tech}
        </span>
      ))}
    </div>
  );
}

function Features({ features }) {
  if (!features?.length) return null;
  return (
    <ul className="[font-family:var(--font-serif-body)] font-medium text-[15px] md:text-[18px] mt-2 ml-3 flex flex-col gap-1">
      {features.map((feature, i) => (
        <li key={i} className="flex">
          <p className="text-gold-muted">•</p>
          <p className="ml-1">{feature}</p>
        </li>
      ))}
    </ul>
  );
}

function Buttons({ buttons }) {
  if (!buttons?.length) return null;
  return (
    <div className="flex flex-row flex-wrap gap-2 mt-9 justify-center">
      {buttons.map((btn) => (
        <Button
          key={btn.text}
          href={btn.href}
          variant={btn.variant || "solid"}
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-[400px]"
        >
          {btn.text}
        </Button>
      ))}
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="relative p-2 flex flex-col text-gold mb-6">
      {/* bright accent stars */}
      <TwinkleStar src={starLarge} className="absolute max-h-[40px] top-2 right-4 -z-10" />
      <TwinkleStar src={starSmall} className="absolute max-h-[14px] top-10 right-16 -z-10" />
      <TwinkleStar src={starDot} className="absolute max-h-[20px] top-0 right-20 -z-10" />
      <TwinkleStar src={starLarge} className="absolute h-[30px] top-8 left-2 -z-10" />
      <TwinkleStar src={starSmall} className="absolute max-h-[20px] top-0 left-12 -z-10" />
      <TwinkleStar src={starDot} className="absolute max-h-[20px] top-11 left-8 -z-10" />
      <TwinkleStar src={starDot} className="absolute max-h-[7px] top-11 right-50 -z-10" />
      <TwinkleStar src={starSmall} className="absolute max-h-[25px] top-0 left-40 -z-10" />
      <TwinkleStar src={starSmall} className="absolute max-h-[18px] top-16 left-32 -z-10" />
      <TwinkleStar src={starLarge} className="absolute max-h-[22px] top-20 right-8 -z-10" />
      <TwinkleStar src={starDot} className="absolute max-h-[8px] top-24 left-6 -z-10" />

      {/* dim, far-off background stars */}
      <TwinkleStar src={starDot} className="absolute max-h-[6px] top-4 left-24 -z-10 opacity-50" />
      <TwinkleStar src={starDot} className="absolute max-h-[5px] top-20 right-28 -z-10 opacity-50" />
      <TwinkleStar src={starSmall} className="absolute max-h-[10px] top-28 right-4 -z-10 opacity-50" />
      <TwinkleStar src={starDot} className="absolute max-h-[6px] top-1 right-32 -z-10 opacity-50" />
      <TwinkleStar src={starDot} className="absolute max-h-[7px] top-14 left-20 -z-10 opacity-50" />
      <TwinkleStar src={starSmall} className="absolute max-h-[9px] top-2 left-0 -z-10 opacity-50" />
      <TwinkleStar src={starDot} className="absolute max-h-[5px] top-32 left-10 -z-10 opacity-50" />

      {/* middle stars — % positions so they land mid-page no matter how long the content runs */}
      <TwinkleStar src={starLarge} className="absolute max-h-[26px] top-1/3 left-2 -z-10" />
      <TwinkleStar src={starSmall} className="absolute max-h-[16px] top-[38%] right-6 -z-10" />
      <TwinkleStar src={starDot} className="absolute max-h-[7px] top-[36%] left-1/2 -z-10 opacity-50" />
      <TwinkleStar src={starDot} className="absolute max-h-[6px] top-1/2 right-3 -z-10 opacity-50" />
      <TwinkleStar src={starSmall} className="absolute max-h-[12px] top-[52%] left-6 -z-10 opacity-50" />
      <TwinkleStar src={starDot} className="absolute max-h-[8px] top-[46%] right-1/3 -z-10" />

      {/* bottom stars — anchored to the container's bottom edge, behind the buttons */}
      <TwinkleStar src={starLarge} className="absolute max-h-[24px] bottom-24 right-6 -z-10" />
      <TwinkleStar src={starSmall} className="absolute max-h-[14px] bottom-32 left-4 -z-10" />
      <TwinkleStar src={starDot} className="absolute max-h-[7px] bottom-16 left-1/3 -z-10 opacity-50" />
      <TwinkleStar src={starDot} className="absolute max-h-[6px] bottom-4 right-1/4 -z-10 opacity-50" />
      <TwinkleStar src={starSmall} className="absolute max-h-[10px] bottom-8 right-10 -z-10 opacity-50" />
      <TwinkleStar src={starDot} className="absolute max-h-[5px] bottom-40 right-2 -z-10 opacity-50" />

      <div className="flex">
        <Link to="/projects" className="text-subtitle2 text-gold mr-auto mt-2">
          ← Projects
        </Link>
      </div>

      <h2 className="text-h2 font-bold mt-4">{project.title}</h2>
      {project.subtitle && (
        <p className="text-body2 italic">{project.subtitle}</p>
      )}

      <TechStack techStack={project.techStack} />

      {project.paragraphs.map((p, i) => (
        <p key={i} className="text-body1 mt-2">{p}</p>
      ))}

      <Features features={project.features} />

      {project.images ? (
        <Carousel images={project.images} imageClassName={project.imageClass} className="mt-8" />
      ) : (
        project.image && (
          <img src={project.image} alt={project.title} className={`mt-3 ${project.imageClass}`} />
        )
      )}

      {project.buttons ? (
        <Buttons buttons={project.buttons} />
      ) : (
        project.buttonHref && (
          <Button href={project.buttonHref} 
              variant="solid" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-9 max-w-[400px] self-center">
            {project.buttonText}
          </Button>
        )
      )}
    </div>
  );
}