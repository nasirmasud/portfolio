import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";

type Props = {
  params: Promise<{ project: string }>; // Changed to Promise
};

export default async function Project({ params }: Props) {
  const { project: slug } = await params; // Await the params promise

  if (!slug) {
    return (
      <div>
        <h1 className='text-5xl'>Error: Missing project parameter</h1>
      </div>
    );
  }

  const project = await getProject(slug);

  return (
    <div>
      <header className='flex justify-between items-center'>
        <h1 className='mt-1 font-extrabold bg-gradient-to-r from-purple-700 to-blue-900 bg-clip-text text-transparent text-5xl'>
          {project.name}
        </h1>
        <a
          href={project.url}
          title='View Project'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-800 rounded-lg text-grey-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-green-600 hover:text-gray-600 transition'
        >
          View Project
        </a>
      </header>
      <div className='text-lg text-gray-500 mt-5'>
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className='mt-4 border-amber-400 object-cover rounded-xl'
      />
    </div>
  );
}
