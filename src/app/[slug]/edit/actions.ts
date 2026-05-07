'use server'

import { Octokit } from "@octokit/rest";
import { revalidatePath } from "next/cache";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function updateWikiPage(slug: string, content: string, title: string) {
  const path = `wiki/${slug}.mdx`;
  
  const mdxData = `---
title: ${title}
---
${content}`;

  try {
    const { data: currentFile } = await octokit.repos.getContent({
      owner: process.env.GITHUB_REPO_OWNER!,
      repo: process.env.GITHUB_REPO_NAME!,
      path,
    });

    await octokit.repos.createOrUpdateFileContents({
      owner: process.env.GITHUB_REPO_OWNER!,
      repo: process.env.GITHUB_REPO_NAME!,
      path,
      message: `Wiki Update: ${title}`,
      content: Buffer.from(mdxData).toString("base64"),
      sha: (currentFile as any).sha,
    });

    revalidatePath(`/${slug}`);
    return { success: true };
  } catch (error) {
    console.error("Git Update Error:", error);
    return { success: false };
  }
}