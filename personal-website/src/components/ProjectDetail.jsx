import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projectsData";
import Button from "../components/Button";
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
          className="bg-darkest-green text-gold-muted text-subtitle3 py-1 px-2 rounded-xl mt-2 ml-0.5">
          {tech}
        </span>
      ))}
    </div>
  );
}

function Features({ features }) {
  if (!features?.length) return null;
  return (
    <ul className="[font-family:var(--font-serif-body)] font-medium text-[15px] md:text-[18px] mt-3 ml-3 flex flex-col gap-1">
      {features.map((feature, i) => (
        <li key={i} className="flex">
          <p className="text-gold-muted">•</p>
          <p className="ml-1">{feature}</p>
        </li>
      ))}
    </ul>
  );
}

function ImageGallery({ images, imageClass }) {
  if (!images?.length) return null;
  return (
    <div className="flex flex-row gap-2 mt-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-2 px-2">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          className={`snap-center shrink-0 ${imageClass}`}
        />
      ))}
    </div>
  );
}

function Buttons({ buttons }) {
  if (!buttons?.length) return null;
  return (
    <div className="flex flex-row flex-wrap gap-2 mt-5 justify-center">
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
      <TwinkleStar src={starLarge} className="absolute max-h-[28px] top-2 right-4 -z-10" />
      <TwinkleStar src={starSmall} className="absolute max-h-[14px] top-10 right-16 -z-10" />
      <TwinkleStar src={starDot} className="absolute max-h-[7px] top-0 right-20 -z-10" />
      <TwinkleStar src={starLarge} className="absolute max-h-[18px] top-6 left-2 -z-10" />
      <TwinkleStar src={starSmall} className="absolute max-h-[10px] top-0 left-12 -z-10" />
      <TwinkleStar src={starDot} className="absolute max-h-[6px] top-11 left-8 -z-10" />
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
        <ImageGallery images={project.images} imageClass={project.imageClass} />
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
              className="mt-5 max-w-[400px] self-center">
            {project.buttonText}
          </Button>
        )
      )}
    </div>
  );
}