import PostHero from "../components/PostHero";
import PostPreview from "../components/PostPreview";
import { getAllPosts } from "../lib/api";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const recentPosts = posts.slice(0, 4);

  return (
    <div className="w-full ">
      <PostHero />
      <div className="container m-auto">
        <main>
          <div className="grid max-w-[90ch] md:grid-cols-2 grid-cols-1 mx-auto md:gap-32 gap-8 py-20 ">
            {recentPosts.map((post) => (
              <div key={post.title}>
                <PostPreview post={post} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
