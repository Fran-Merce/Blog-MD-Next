import { getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="container max-w-[75ch] mx-auto">
      <main className="">
        <div className="w-full h-16  text-black">
          <div className="m-8">
            <h1 className="text-4xl text-center font-bold">{post.title}</h1>
          </div>
          <p className="text-gray-400">{post.author}</p>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </main>
    </div>
  );
}
