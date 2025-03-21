import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className='text-7xl font-extrabold'>
        Salam, It&apos;s{" "}
        <span className='bg-gradient-to-r from-purple-700 to-blue-900 bg-clip-text text-transparent'>
          Nasir
        </span>
        !
      </h1>
      <p className='mt-3 text-xl text-gray-600'>
        Peace be upon you! Check out my Projects!
      </p>

      <h2 className='mt-24 font-bold text-gray-700 text-3xl'>My Projects</h2>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className='border-2 border-gray-500 rounded-lg p-1 hover:scale-103 hover:border-blue-500 transition'
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.slug}
                width={750}
                height={300}
                className='object-cover rounded-lg border border-gray-500'
              />
            )}
            <div className='mt-1 font-extrabold bg-gradient-to-r from-purple-700 to-blue-900 bg-clip-text text-transparent'>
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
