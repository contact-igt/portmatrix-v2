// Short, source-backed "what it is" statement shown near the top of a page.
// Props: title (kicker label, default "What it is"), children (the statement).
// Left brand-red rule, larger body (~20px), ~68ch measure.
export default function DefinitionBlock({ title = "What it is", children }) {
  return (
    <section className="mt-10 max-w-[68ch] border-l-4 border-brandred py-1 pl-6" aria-label={title}>
      <h2 className={`${title.length > 32 ? "kicker-sentence" : "kicker"} text-brandred`}>{title}</h2>
      <div className="mt-3 text-[1.1875rem] leading-[1.6] text-ink sm:text-[1.3125rem]">{children}</div>
    </section>
  );
}
