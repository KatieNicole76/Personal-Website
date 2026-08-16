import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projectsData";
import logo from "../assets/logo.png";
import Button from "../components/Button";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="p-2 flex flex-col text-gold mb-6">
      <div className="flex">
        <Link to="/projects" className="text-subtitle2 text-gold mr-auto mt-2">
          ← Projects
        </Link>
      </div>
      
      <h2 className="text-h2 font-bold mt-4">{project.title}</h2>
      {project.subtitle && (
        <p className="text-body2 italic">{project.subtitle}</p>
      )}

      {project.paragraphs.map((p, i) => (
        <p key={i} className="text-body1">{p}</p>
      ))}

      {project.image && (
        <img src={project.image} alt={project.title} className={project.imageClass} />      
      )}

      {project.buttonHref && (
        <Button href={project.buttonHref} variant="solid" target="_blank" rel="noopener noreferrer" className="mt-3 max-w-[400px] self-center mt-5">
          {project.buttonText}
        </Button>
      )}
    </div>
  );
}