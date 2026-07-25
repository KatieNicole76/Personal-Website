import { Link } from "react-router-dom";
import { projects } from "../data/projectsData.js";

export default function Projects() {
  return (
    <div className="p-2 flex flex-col gap-2">
      <h2 className="text-h2 text-gold text-center">Things I'm Proud Of</h2>

      <div className="flex flex-col gap-2 mt-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="bg-med-green text-gold text-subtitle2 py-2 px-3 rounded-xl text-center"
          >
            {project.title}
          </Link>
        ))}
      </div>
    </div>
  );
}