import Image from "next/image";
import { PortableTextComponents } from "@portabletext/react";

import { urlFor } from "@/sanity/lib/image";

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-10 overflow-hidden rounded-2xl">
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value.alt || ""}
          width={1200}
          height={700}
          className="h-auto w-full object-cover"
        />
      </div>
    ),
  },

  block: {
    h1: ({ children }) => (
      <h1 className="mb-6 mt-12 text-4xl font-bold">{children}</h1>
    ),

    h2: ({ children }) => (
      <h2 className="mb-5 mt-10 text-3xl font-bold">{children}</h2>
    ),

    h3: ({ children }) => (
      <h3 className="mb-4 mt-8 text-2xl font-semibold">{children}</h3>
    ),

    normal: ({ children }) => (
      <p className="mb-6 leading-8 text-slate-700">
        {children}
      </p>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-blue-600 pl-6 italic">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="my-6 list-disc pl-6">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="my-6 list-decimal pl-6">
        {children}
      </ol>
    ),
  },

  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 underline"
      >
        {children}
      </a>
    ),
  },
};