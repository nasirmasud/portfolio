import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";

type Props = {
  params: { project: string };
};
export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className='max-w-3xl mx-auto py-20'>
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
      {/* content goes here */}
      <div className='text-lg text-gray-500 mt-5'>
        <PortableText value={project.content} />
      </div>

      {/* image goes here */}
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
