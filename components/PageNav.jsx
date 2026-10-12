// PageNav — "On this page" anchor list for long pages. Server component, no
// JS: plain in-page links (headings need matching ids; globals.css gives
// anchored headings scroll-margin below the fixed header).
//
// USAGE
//   <PageNav items={[{ id: "overview", label: "Overview" }, { id: "faq", label: "FAQ" }]} />
//   <PageNav items={items} layout="rail" />   // vertical list; sticky at lg+
//   Props: items [{id,label}], title ("On this page"), layout "inline" | "rail"
//   (inline = ruled horizontal wrap row; rail = vertical list with left rule,
//   sticky under the header at lg+ — place it in a sidebar column).
// Every link is a >=44px tap target.
export default function PageNav({ items, title = "On this page", layout = "inline", className = "" }) {
  if (!items?.length) return null;
  const rail = layout === "rail";
  return (
    <nav
      aria-label={title}
      className={`${rail ? "lg:sticky lg:top-24" : "border-y border-hairline py-2"} ${className}`}
    >
      <p className="kicker mb-1 text-slatey">{title}</p>
      <ul
        role="list"
        className={rail ? "mt-2 border-l border-hairline" : "flex flex-wrap gap-x-6"}
      >
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={`inline-flex min-h-11 items-center text-[0.9375rem] font-medium text-ink/85 hover:text-navy hover:underline ${
                rail ? "-ml-px border-l-2 border-transparent pl-4 hover:border-navy" : ""
              }`}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
