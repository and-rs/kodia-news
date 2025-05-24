import { PortableTextReactComponents } from "next-sanity"

export const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => (
      <h1 className="my-4 text-4xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="my-3 text-3xl font-semibold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="my-2 text-2xl font-semibold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="my-1 text-xl font-semibold">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="my-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="pl-4 my-4 italic border-l-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-blue-500 hover:underline"
        >
          {children}
        </a>
      )
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="pl-5 my-2 list-disc">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="pl-5 my-2 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="my-1">{children}</li>,
    number: ({ children }) => <li className="my-1">{children}</li>,
  },
}
