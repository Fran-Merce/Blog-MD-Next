import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Fields } from "../constants/fields.enum";

const postsDirectory = join(process.cwd(), "_posts");

export const getPostSlugs = () => fs.readdirSync(postsDirectory);

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Items = {};
  type Items = {
    [key: string]: string;
  };
  fields.forEach((field) => {
    if (field === Fields.SLUG) {
      items[field] = realSlug;
    }
    if (field === Fields.CONTENT) {
      items[field] = content;
    }
    if (typeof data[field] !== Fields.UNDEFINED) {
      items[field] = data[field];
    }
  });
  return items;
};

export const getAllPosts = (fields: string[] = []) => {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
};
