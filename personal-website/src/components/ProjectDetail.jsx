import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projectsData";
import logo from "../assets/logo.png";
import Button from "../components/Button";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="p-2 flex flex-col gap-2 text-gold">
      <div className="flex">
        <Link to="/projects" className="text-subtitle2 text-gold ml-auto">
          ← Projects
        </Link>
      </div>
      

      <h2 className="text-h2 font-bold">{project.title}</h2>
      {project.subtitle && (
        <p className="text-body2 italic">{project.subtitle}</p>
      )}

    {project.image && (
        <img src={project.image} alt={project.title} className="rounded mt-4" />
    )}

      {project.paragraphs.map((p, i) => (
        <p key={i} className="text-body1">{p}</p>
      ))}

      {project.buttonHref && (
        <Button href={project.buttonHref} variant="solid" target="_blank" rel="noopener noreferrer" className="mt-3">
          {project.buttonText}
        </Button>
      )}

    </div>
  );
}