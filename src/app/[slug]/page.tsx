import { getDocBySlug, getAllDocs } from "@/lib/docs";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => ({ slug: doc.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const doc = await getDocBySlug(params.slug);

  if (!doc) notFound();

  return (
    <main className="your-preconfigured-container">
      <header>
        <h1>{doc.metadata.title}</h1>
      </header>
      
      <article className="markdown-body">
        {doc.content}
      </article>
    </main>
  );
}