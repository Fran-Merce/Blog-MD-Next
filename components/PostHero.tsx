/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function PostHero() {
  return (
    <div className="h-96 shadow-sm  bg-stone-100 shadow-sm">
      <div className="max-w-[70%] mx-auto flex items-center justify-center h-full w-full">
        <div className="flex max-w-[70ch] justify-center flex-col items-center gap-3 ">
          <Image
            src="/avatar.png"
            className="bf"
            alt="avatar"
            width={200}
            height={150}
          />
          <p className="font-bold">Francisco Merce</p>
          <p className="text-center font-light">
            I'm a software developer who loves to build projects and share
            valuable tips for new programmers on this blog. Please enjoy your
            read and feel free to comment, share or connect with me!
          </p>
        </div>
      </div>
    </div>
  );
}
