import Link from "next/link";
import { getAllDocs } from "@/lib/mdx";

export default async function WikiNav() {
  const docs = await getAllDocs();

  return (
    <nav className="wiki-nav">
      <h3>Documentation</h3>
      <ul>
        {docs.map((doc: any) => (
          <li key={doc.slug}>
            <Link href={`/wiki/${doc.slug}`}>
              {doc.title || doc.slug}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}