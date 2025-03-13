import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      {projects.map((project: Project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </div>
  );
}
