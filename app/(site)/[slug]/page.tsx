// import { getPage } from "@/sanity/sanity-utils";
// import { PortableText } from "next-sanity";

// type Props = {
//   params: { slug: string };
// };

// export default async function Page({ params }: Props) {
//   const page = await getPage(params.slug);

//   return (
//     <div>
//       <h1 className='bg-gradient-to-r from-purple-700 to-blue-900 bg-clip-text text-transparent text-5xl'>
//         {page.title}
//       </h1>
//       <div className='text-lg text-gray-600 mt-10'>
//         <PortableText value={page.content} />
//       </div>
//     </div>
//   );
// }
"use client";

import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import { use, useEffect, useState } from "react";

type Props = {
  params: Promise<{ slug: string }>; // params is now a Promise
};

export default function Page({ params }: Props) {
  const { slug } = use(params); // Unwrap params using use()

  const [page, setPage] = useState<{ title: string; content: any } | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const pageData = await getPage(slug);
        setPage(pageData);
      } catch (error) {
        console.error("Failed to fetch page data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!page) return <div>Page not found.</div>;

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
