import { getDocBySlug } from "@/lib/docs";
import EditorClient from "@/app/[slug]/edit/editorClient";

export default async function EditPage({ params }: { params: { slug: string } }) {
  const doc = await getDocBySlug(params.slug);
  
  if (!doc) return <div>Page not found.</div>;

  return (
    <div className="editor-wrapper">
      <h2>Editing: {doc.metadata.title}</h2>
      <EditorClient 
        slug={params.slug} 
        initialContent={doc.content} 
        initialTitle={doc.metadata.title} 
      />
    </div>
  );
}