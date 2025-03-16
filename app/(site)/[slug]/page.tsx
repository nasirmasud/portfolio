import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

type Props = {
  params: Promise<{ page: string }>; // Changed to Promise
};

export default async function Project({ params }: Props) {
  const { page: slug } = await params; // Await the params promise

  if (!slug) {
    return (
      <div>
        <h1 className='text-5xl'>Error: Missing project parameter</h1>
      </div>
    );
  }

  const page = await getPage(slug);

  return (
    <div>
      <h1 className='bg-gradient-to-r from-purple-700 to-blue-900 bg-clip-text text-transparent text-5xl'>
        {page.title}
      </h1>
      <div className='text-lg text-gray-600 mt-10'>
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
